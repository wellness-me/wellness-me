const express = require("express")
const router = express.Router();

const userDataController = require("../../controllers/userdata.controller")

// route to post data
router
    .route("/")
    .post(userDataController.createData)

// handles get and delete for userIDs
router
    .route("/:userID")
    .get(userDataController.getData)
    .delete(userDataController.deleteData)

router
    .route("/json/:userID")
    .get(userDataController.getJsonFile)

module.exports = router
