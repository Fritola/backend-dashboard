const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/index.routes')

const app = express()

mongoose.connect('mongodb+srv://gustavo:KfgMHE4AV07xvCP1@cluster0-ujwps.mongodb.net/qualicorp?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true})

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
    console.log("Server running at 3000")
})

