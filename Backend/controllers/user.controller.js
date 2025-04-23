const express = require('express')
const {validationResult} = require('express-validator')
const userModal = require('../modals/user.modal')
const { hash } = require('bcrypt')
const userService = require('../service/user.service')
const cookie = require('cookie-parser')


module.exports.register = async function (req,res,next) {
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({message:'Invalid email or password'})
    }
    const {fullname,email,password} = req.body
    const userAlready = userModal.findOne(email)
    if(userAlready){
        return res.status(400).json({message:'User already exist'})
    }
    const hashpassword = userModal.hashpassword(password)
    const user = await userService.create({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashpassword
    })
    const token = user.generateAuthToken()
    res.status(200).json({user,token})
}
module.exports.login = async function (req,res,next) {
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({message:'invalid email or password'})
    }
    const {email,password} = req.body
    const user = await userModal.findOne(email)
    if(!user){
        return res.status(400).json({message:'Invalid user or password'})
    }
    const isMatch = await userModal.comparepassword(password)
    if(!isMatch){
        return res.status(400).json({ message: "Invalid user or password" });
    }
    const token = user.generateAuthToken()
    res.cookie('token',token)
    res.status(200).json(user,token)
}