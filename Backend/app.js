if (process.env.NODE_ENV === 'dev') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const router = require('./routes')
const cors = require('cors')
const port = 3000

const connectDB = require('../Backend/config/db')

//connect to database
app.use(connectDB)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(port, function() {
    console.log("Server is running on port " + port);
});

module.exports = app