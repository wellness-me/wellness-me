const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const userController = require("../../controllers/user.controller")

router
    .route("/register")
    .post(userController.registerUser)

router
    .route("/login")
    .post(userController.loginUser)

module.exports = router
