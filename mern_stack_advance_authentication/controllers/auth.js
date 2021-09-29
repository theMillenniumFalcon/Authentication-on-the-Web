const User = require('../models/User')

const register = async(req, res, next) => {
    const {username, email, password}  = req.body
    try {
        const user = await User.create({
            username, email, password
        })
        res.status(200).json({
            success: true,
            user
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            err: err.message,
        })
    }
}

const login = (req, res, next) => {
    res.send("Login route")
}

const forgotpassword = (req, res, next) => {
    res.send("Forgot route")
}

const resetpassword = (req, res, next) => {
    res.send("Reset route")
}

module.exports = {
    register, login, forgotpassword, resetpassword
}