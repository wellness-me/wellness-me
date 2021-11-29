const httpStatus = require('http-status');
const { UserData } = require("../models/userData.model");
const logger = require("../utils/logger")
const fs = require('fs')

// create a new UserData object storing data
// from the form for this user
const createData = async (req, res) => {
    logger.info("POST /v1/data/")
    // console.log(req.body)

    const data = new UserData(req.body)

    const result = await UserData.create(data)
    
    res.status(httpStatus.CREATED).send(result)
}

// get all user data for a specific userID
// returns array of returned data
const getData = async (req, res) => {
    logger.info("GET /v1/data/:userID")

    const dataForUser = await UserData.find({
        "userID": req.params.userID,
    })

    // didn't find data
    if (dataForUser === null) {
        logger.debug("user not found for get")
        res.status(httpStatus.NOT_FOUND).send({})
    }

    // sorted by date
    dataForUser.sort((a, b) => {
        new Date(b.date) - new Date(a.date);
    })

    res.status(httpStatus.OK).send(dataForUser)
}

// delete all user data for a specific userID
// returns number of deleted objects
const deleteData = async (req, res) => {
    logger.info("DELETE /v1/data/:userID")
    const deletedData = await UserData.deleteMany({
        "userID": req.params.userID
    })

    if (deleteData === null) {
        logger.debug("user not found for deletion")
        res.status(httpStatus.NOT_FOUND).send({})
    }

    res.status(httpStatus.OK).send(deletedData)
}

const getJsonFile = async (req, res) => {
    logger.info("GET /v1/data/json/:userID")
    const dataForUser = await UserData.find({
        "userID": req.params.userID,
    })
    fs.writeFileSync("data.json", JSON.stringify(dataForUser))

    res
        .status(httpStatus.OK)
        .download("data.json")
}

module.exports = {
    createData,
    getData,
    deleteData,
    getJsonFile
}
