//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    // userID is string of Mongo UUID
    userID: {
        type: String,
        index: true
    },
    sleep: {
        type: Number,
        required: true
    },
    exercise: {
        type: Number,
        required: true
    }
})

const UserData = new mongoose.model("UserData", userDataSchema, "user-data")
module.exports = {
    UserData
}