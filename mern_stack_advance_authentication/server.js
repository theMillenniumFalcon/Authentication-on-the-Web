const express = require('express');
const app = express();
const port = process.env.PORT || 5000
require('dotenv').config({path: "./config.env"})
// this allows us to get data from the body
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})