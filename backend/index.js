const express = require("express")
const mongoose = require('mongoose');
const { UserData } = require("./models/userData.model")
require('dotenv').config()

const cors = require('cors');

const app = express()

// const client = new MongoClient(process.env.MONGO_URL)
const db_type = process.env.USE_DEV ? "wellness-dev" : "wellness-prod"
console.log(db_type, process.env.USE_DEV)
mongoose.connect(process.env.MONGO_URL + db_type)

app.use(cors({
    origin: '*'
}));

app.use(express.json())


app.post("/v1/data", async(req, res) => {
    console.log(req.body)

    const data = new UserData(req.body)
    console.log(data)

    const result = await UserData.create(data)
    console.log(result)
    res.status(200).send({})
})

app.listen(process.env.PORT, () => {
    console.log(`App running at http://localhost:${process.env.PORT}`)
})