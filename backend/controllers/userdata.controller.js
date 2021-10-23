const httpStatus = require('http-status');
const { UserData } = require("../models/userData.model")

const createData = async (req, res) => {
    const data = new UserData(req.body)

    const result = await UserData.create(data)
    res.status(httpStatus.CREATED).send(result)
}

module.exports = {
    createData
}
