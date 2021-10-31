//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // userID is string of Mongo UUID for user
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
    },
}, { 
    // store time object was created and updated
    timestamps: true 
})

const Users = new mongoose.model("User", userSchema, "users")
module.exports = {
    Users
}
