require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
 
const {
    PORT = 5000,
} = process.env

app.use(express.json())

const posts = [
    { username: "Peter", post: "Post 1"},
    { username: "Alex", post: "Post 2"},
]

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.post("/login", (req, res) => {
    // Authenticate user
    const username = req.body.username

    const user = { name: username }
    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })

})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})