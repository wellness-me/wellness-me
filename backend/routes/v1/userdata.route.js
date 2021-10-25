const express = require("express")
const router = express.Router();

const userDataController = require("../../controllers/userdata.controller")

router
    .route("/")
    .post(userDataController.createData)

// TODO: add a router.route("/:userId") to allow for get and delete

module.exports = router
