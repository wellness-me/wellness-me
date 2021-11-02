const express = require("express")
const cors = require('cors');
const cookieParser = require("cookie-parser");
const routes = require('./routes/v1');
const app = express()

app.use(cors({
    origin: '*'
}));
app.use(cookieParser());

app.use(express.json())
app.use('/v1', routes);

module.exports = app
