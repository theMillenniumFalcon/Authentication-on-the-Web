const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const app = express();

app.set("port", 4000)

// bodyParser is used to get the form value that you submit
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

app.use(
    session({
        key:'user_sid',
        secret: "thisisrandomstuff",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000,
        }
    })
)

app.use((req, res, next) => {
    if(req.session.user && req.user_sid) {
        res.redirect('/dashboard')
    }
    next()
})

const sessionChecker = (req, res, next) => {
    if(req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard')
    } else {
        next()
    }
}

app.get('/', sessionChecker, (req, res) => {
    res.redirect('/login')
})

app.route('/login').get(sessionChecker, (req, res) => {
    res.sendFile(__dirname, '/public/login.html')
})

app.listen(app.get("port"), () => {
    console.log(`listening on port 4000`);
});