const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()

app.use(express.json())
app.use(cors()) 
// this above says that anyone can communicate with this backend

module.exports = app
// this above renders the app exportable
