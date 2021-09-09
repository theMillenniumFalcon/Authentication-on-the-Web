const express = require('express')
const session = require('express-session')
const TWO_HOURS = 1000 * 60 * 60 *  2 // 2-hours cookie time

const {
    PORT = 5000,
    NODE_ENV = 'development',

    SESS_NAME = 'sid',
    SESS_SECRET = "ssh!quiet,it\'asecret!",
    SESS_LIFETIME = TWO_HOURS
} = process.env

const IN_PROD = NODE_ENV === 'production'

const app = express()

app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    //this will be the configuration for the actual session cookie
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true, // or 'strict'
        secure: IN_PROD
    }
}))

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
