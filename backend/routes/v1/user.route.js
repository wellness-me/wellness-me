const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const userController = require("../../controllers/user.controller")

router
    .route("/")
    .patch(userController.updateUser)

router
    .route("/:userID")
    .delete(userController.deleteUser)

router
    .route("/register")
    .post(userController.registerUser)

router
    .route("/login")
    .post(userController.loginUser)


module.exports = router
