const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const TWO_HOURS = 1000 * 60 * 60 *  2 // 2-hours cookie time

const {
    PORT = 5000,
    NODE_ENV = 'development', /// For using secure cookies in production, but allowing for testing in development

    SESS_NAME = 'sid',
    SESS_SECRET = "ssh!quiet,it\'asecret!",
    SESS_LIFETIME = TWO_HOURS
} = process.env

const IN_PROD = NODE_ENV === 'production'

const users = [
    { id: 1, name: 'Alex', email: 'alex@gmail.com', password: 'secret '},
    { id: 2, name: 'Peter', email: 'peter@gmail.com', password: 'secret '},
    { id: 3, name: 'Mona', email: 'mona@gmail.com', password: 'secret '},
]

const app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(bodyParser.urlencoded({
    extended: true,
}))

// session configuration
app.use(session({
    name: SESS_NAME, // a custom name for the session-id cookie
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    //this will be the configuration for the actual session cookie
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD // secure is true only if application is in production mode
    }
}))

const redirectLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/login')
    } else {
        next()
    }
}

const redirectHome = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/home')
    } else {
        next()
    }
}

app.get('/', (req, res) => {
    // const { userId } = req.session
    const userId = 1

res.send(`
    <h1>Welcome!</h1>
    ${userId ? `
    <a href='/home'>Home</a>
    <form method='post' action='/logout'>
        <button>Logout</button>
    </form>
    ` : `
    <a href='/login'>Login</a>
    <a href='/register'>Register</a>
    `}
`)
})

app.get('/home', redirectLogin, (req, res) => {
res.send(`
    <h1>Home</h1>
    <a href='/main'>Main</a>
    <ul>
        <li>Name: </li>
        <li>Email: </li>
    </ul>
`)
})

app.get('/login', redirectHome, (req, res) => {
res.send(`
    <h1>Login</h1>
    <form method = 'post' action = '/login'>
        <input type='email' name='email' placeholder='Email' required />
        <input type='password' name='password' placeholder='Password' required />
        <input type='submit' />
    </form>
    <a href='/register'>Register</a>
`)
})

app.get('/register', redirectHome, (req, res) => {
res.send(`
    <h1>Register</h1>
    <form method='post' action '/register'>
        <input name='name' placeholder='Name' required />
        <input type='email' name='email' placeholder='Email' required />
        <input type='password' name='password' placeholder='Password' required />
        <input type='submit' />
    </form>
    <a href='/login'>Login</a>    
`)
})

app.post('/login', redirectHome, (req, res) => {
    const { email, password } = req.body

    if (email && password) {
        const user = users.find((user) => user.email === email && user.password === password)

        if (user) {
        req.session.userId = user.id
        return res.redirect('/home')
        }
    }
    res.redirect('/home')
})

app.post('/register', redirectHome, (req, res) => {

})

app.post('/logout', redirectLogin, (req, res) => {

})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
