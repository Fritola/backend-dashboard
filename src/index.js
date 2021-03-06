require('dotenv-safe').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/index.routes')
const app = express()

mongoose.connect(process.env.CONNECTION_STRING, 
{useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000 , () => {
    console.log("Server running at 3000")
})

