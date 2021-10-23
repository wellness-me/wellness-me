const express = require("express")
const mongoose = require('mongoose');
require('dotenv').config()

const routes = require('./routes/v1');

const cors = require('cors');

const app = express()

// use dev when testing
const db_type = process.env.USE_DEV ? "wellness-dev" : "wellness-prod"
mongoose.connect(process.env.MONGO_URL + db_type)

app.use(cors({
    origin: '*'
}));

app.use(express.json())
app.use('/v1', routes);

module.exports = app
