const mongoose  = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"]
    },
    email: {
        type: String,
        required: [true, "Please provide a email address"],
        unique: true,
        match: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            "Please enter a valid email"
        ]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minLength: 6,
        select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})

const User = mongoose.model("User", UserSchema)
module.exports = User
