const express = require('express');
const session = require('express-session');

const TWO_HOURS = 1000 * 60 * 60 * 2;

const app = express();

const {
    PORT = 5000,
    NODE_ENV = 'development',

    SESS_NAME = 'sid',
    SESS_SECRET = 'samplevalue',
    SESS_LIFETIME = TWO_HOURS,
} = process.env;

const IN_PROD = NODE_ENV === 'production';

const users = [
    { id: 1, name: 'Peter', email: 'alex@gmail.com', password: 'secret'},
    { id: 2, name: 'Max', email: 'max@gmail.com', password: 'secret'},
    { id: 3, name: 'Alex', email: 'alex@gmail.com', password: 'secret'},
]

app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD,
    }
}))

app.get('/', (req, res) => {

    // const { userId } = req.session
    const userId = 1
    console.log(userId)

    res.send(`
        <h1>Welcome</h1>
        ${userId ? `
          <a href = '/home'>Home</a>
          <form method = 'post' action = '/logout'>
            <button>Logout</button>
           </form>
        ` : `
           <a href = '/login'>Login</a>
           <a href = '/register'>Register</a>        
        `}
    `)
})

app.get('/home', (req, res) => {

})

app.get('/login', (req, res) => {

})

app.get('/register', (req, res) => {

})

app.post('/login', (req, res) => {

})

app.post('/register', (req, res) => {

})

app.post('/logout', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})