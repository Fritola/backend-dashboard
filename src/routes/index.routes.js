const express = require("express")
const router = express.Router()

const User = require('../models/User')

router.get('/user', async (request, response) => {
    const users = await User.find()
    return response.json({users})
})

router.get('/user/:id', async (request, response) => {
    const {id} = request.params
    const user = await User.findById(id)
    return response.json(user)
})

router.post('/user', async (request, response) => {
    const { cpf, nome, email, telefone } = request.body
    const userExist = await User.findOne({$or: [{email}, {cpf} ]})
    if(!userExist){
        const user = await User.create({
            cpf, 
            nome, 
            email, 
            telefone
        })
        return response.status(200).json(user) 
    }else{
        return response.status(400).json({error: "User already exists"})
    }        
})

router.put('/user/:id', async (request, response) => {
    const {id} = request.params    
    const {email, cpf, telefone, nome} = request.body

    const userExist = await User.findOne({                    
        $and: [ { _id: {$ne: id} } ],
        $or: [ { email }, { cpf }]         
    })
    
    if(!userExist){
        await User.findByIdAndUpdate(id, {email, cpf, telefone, nome})
        return response.status(204).send()
    }else{
        return response.status(400).json({error: "Cannot update this user"})
    }         
})

router.delete('/user/:id', async (request, response) => {
    const {id} = request.params
    
    await User.findByIdAndDelete(id, function(err) {
        if(err) return response.status(400).json({error: err})
        return response.status(204).send()
    })
})



module.exports = router