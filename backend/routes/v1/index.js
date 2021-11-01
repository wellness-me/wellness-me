const express = require("express")
const router = express.Router();
const auth = require("../../middleware/auth");
const userDataRoute = require("./userdata.route")
const userRoute = require("./user.route")

router.use('/data', auth, userDataRoute);
router.use('/users', userRoute)

module.exports = router;
