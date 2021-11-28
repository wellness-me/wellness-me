//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    // userID is string of Mongo UUID for user
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
    },
    happiness: {
        type: Number,
        required: true
    },
    journal: {
        type: String,
        required: false,
    }
}, { 
    // store time object was created and updated
    timestamps: true 
})

const UserData = new mongoose.model("UserData", userDataSchema, "user-data")
module.exports = {
    UserData
}
