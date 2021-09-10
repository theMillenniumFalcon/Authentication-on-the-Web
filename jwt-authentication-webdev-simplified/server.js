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

})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})