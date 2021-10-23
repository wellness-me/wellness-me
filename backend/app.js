const express = require("express")
const cors = require('cors');

const routes = require('./routes/v1');
const app = express()

app.use(cors({
    origin: '*'
}));

app.use(express.json())
app.use('/v1', routes);

module.exports = app
