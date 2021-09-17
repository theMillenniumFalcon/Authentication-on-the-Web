const mongoose = require('mongoose')
const dotenv = require("dotenv")
const bcrypt = require('bcrypt')

dotenv.config()

mongoose.connect(process.env.MONGO_URL, 
    { useNewUrlParser: true, unUnifiedTopology: true }, 
    () => {
    console.log("Connected to MongoDB")
})

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

// helpful functions

userSchema.pre("save", (next) => {
    if(!this.isModified("password")){
        return next()
    } this.password = bcrypt.hashSync(this.password, 10)
    next()
})

// compare passwords
userSchema.methods.comparePassword = function(plainText, callback) {
    return callback(null, bcrypt.compareSync(plainText, this.password))
}

const userModel = mongoose.model("users", userSchema)

module.exports = userModel