const httpStatus = require('http-status');
const { Users } = require("../models/user.model");
const logger = require("../utils/logger")
const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")


const updateUser = async (req, res) => {
    logger.info("PATCH /v1/users")

    let data = {};

    if (req.body.hasOwnProperty("password")) {
        // update password
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(req.body.password, salt);
        data.password = encryptedPassword;
    }
    if (req.body.hasOwnProperty("newusername")) {
        // update username
        data.username = req.body.newusername
    }

    const updatedUser = await Users.findOneAndUpdate({"username": req.body.username}, data)

    res
        .status(httpStatus.OK)
        .send(updatedUser)
}

const deleteUser = async (req, res) => {
    logger.info("DELETE /v1/users")

    const deletedUser = await Users.findOneAndDelete({
        "userID": req.params.userID,
    })

    res
        .status(httpStatus.OK)
        .send(deletedUser)
}

const registerUser = async (req, res) => {
    logger.info("POST /v1/users/register")
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(req.body.password, salt);

    data = {
        username: req.body.username,
        password: encryptedPassword
    }

    const findExistingUser = await Users.findOne({
        username: req.body.username
    })
    if (findExistingUser !== null) {
        res.status(httpStatus.UNAUTHORIZED).send({})
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

    res
        // .cookie("token", token, {httpOnly: false, secure: false})
        // .cookie("username", username, {httpOnly: true})
        .status(httpStatus.CREATED)
        .send(user)
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

        // res.cookie("username", username, {httpOnly: false})
        // res.cookie("token", token, {httpOnly: false})
        res.status(httpStatus.OK)
        res.send(user)
    }
    else {
        // passwords don't match, login failed
        res.status(httpStatus.FORBIDDEN).send(user)
    }
}

module.exports = {
    updateUser,
    deleteUser,
    registerUser,
    loginUser
}
