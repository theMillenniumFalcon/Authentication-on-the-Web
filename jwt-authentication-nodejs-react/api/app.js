const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 3000
app.use(express.json())

const users = [
    {
        id: "1",
        username: "john",
        password: "john6969",
        isAdmin: true,
    },
    {
        id: "2",
        username: "sarah",
        password: "sarah6969",
        isAdmin: false,
    }
]

app.post("/api/login", (req, res) => {
    const {username, password} = req.body
    const user = users.find((user) => {
        return user.username == username && user.password == password;
    })
    if(user) {
        // Generate an access token
        const accessToken  =jwt.sign({id: user.id, isAdmin: user.isAdmin},
            "mySecretKey"
        )
        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accessToken,
        })
    } else {
        res.status(400).json("Username or password incorrect")
    }
})

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, "mySecretKey", (err, user) => {
            if(err) { 
                return res.status(403).json("Token is not valid")
            }
            req.user = user
            next()
        })
    } else {
        res.status(401).json("You are not authenticated!")
    }
}

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})