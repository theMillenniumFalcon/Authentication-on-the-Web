const express = require('express')
const app = express()
const PORT = 5000
const bodyParser = require("body-parser")

app.set("view engine", "pug")

// middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.render('index')
})

app.get("/register", (req, res) => {
    res.json(req.body)
})

app.get("/login", (req, res) => {
    res.render('login')
})

app.get("/dashboard", (req, res) => {
    res.render('dashboard')
})
 
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})