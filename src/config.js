const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login");

// check whether database is connected or not
connect
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch(() => {
        console.log("Something went wrong! Please try after some time");
    });

// Create a schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// collection part
const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;