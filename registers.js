const mongoose = require("mongoose");
const connection = require("./connection");

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Register = mongoose.model("Register", ProjectSchema);

module.exports = Register;
