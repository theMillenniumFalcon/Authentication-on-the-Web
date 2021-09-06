const express = require('express');
const session = require('express-session');
const bodyParser = require('express-session')

const TWO_HOURS = 1000 * 60 * 60 * 2;

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

const app = express();

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
    res.send(`
        <h1>Home</h1>
        <a href='/'>Main</a>
        <ul>
            <li>Name: </li>
            <li>Email: </li>
        </ul>
    `)
})

app.get('/login', (req, res) => {
    res.send(`
        <h1>Login</h1>
        <form method='post' action='/login'>
            <input type='email' name='email' placeholder='Email' required />
            <input type='password' name='password' placeholder='Password' required />
            <input type='submit' />
        </form>
        <a href='/register'>Register</a>
    `)
})

app.get('/register', (req, res) => {
    res.send(`
        <h1>Register</h1>
        <form method='post' action='/register'>
        <input name='name' placeholder='Email' required />
            <input type='email' name='email' placeholder='Email' required />
            <input type='password' name='password' placeholder='Password' required />
            <input type='submit' />
        </form>
        <a href='/login'>Login</a>
    `)
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