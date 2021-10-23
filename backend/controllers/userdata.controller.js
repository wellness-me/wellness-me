const httpStatus = require('http-status');
const { UserData } = require("../models/userData.model")
const logger = require("../utils/logger")

const createData = async (req, res) => {
    const data = new UserData(req.body)

    const result = await UserData.create(data)
    logger.debug("created userdata")
    
    res.status(httpStatus.CREATED).send(result)
}

module.exports = {
    createData
}
