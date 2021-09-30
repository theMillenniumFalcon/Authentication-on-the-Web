require('dotenv').config({path: "./config.env"})
const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const connectDB = require('./db/connect')
const errorHandler = require('./middleware/error')
// this allows us to get data from the body
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

// error handler --> this should be the last piece iof middleware
app.use(errorHandler)

const server = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Connected to database and listening on port ${port}...`)
        })
    } catch (err) {
        console.error(err)
    }
}
server()

process.on('uncaughtException', (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})
