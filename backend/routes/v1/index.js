const express = require("express")
const router = express.Router();

const userDataRoute = require("./userdata.route")

router.use('/data', userDataRoute);

module.exports = router;
