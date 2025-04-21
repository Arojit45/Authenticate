const express = require('express')
const connect = require('./db/database')


const app = express()

app.get('login',()=>{
    res.send('hello')
})


module.exports = app