const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    cpf: Number,
    nome: String,
    email: String,
    telefone: Number
})

module.exports = mongoose.model('User', userSchema)


