const httpStatus = require('http-status');
const { Users } = require("../models/user.model");
const logger = require("../utils/logger")
const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")


const registerUser = async (req, res) => {
    logger.info("POST /v1/users/register")
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(req.body.password, salt);

    data = {
        username: req.body.username,
        password: encryptedPassword
    }

    const newUser = new Users(data)

    const user = await Users.create(newUser)

    const token = jwt.sign(
        { user_id: user._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
    );
    user.token = token

    res.cookie("token", token, {httpOnly: false, secure: false}).status(httpStatus.CREATED).send(user)
}

const loginUser = async (req, res) => {
    logger.info("POST /v1/users/login")

    // search for user in database
    const user = await Users.findOne({
        username: req.body.username
    })

    if (user === null) {
        // user not found
        res.status(httpStatus.UNAUTHORIZED).send(user)
    }
    else if (await bcrypt.compare(req.body.password, user.password)) {
        // passwords match, login succeeded
        const token = jwt.sign(
            { user_id: user._id },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
        );
        user.token = token
        res.cookie("token", token, {httpOnly: true}).status(httpStatus.OK).send(user)
    }
    else {
        // passwords don't match, login failed
        res.status(httpStatus.FORBIDDEN).send(user)
    }
}

module.exports = {
    registerUser,
    loginUser
}
