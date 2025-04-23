const express = require('express')
const cors = require('cors')
const ConnectDB = require('./db/database')
const userroute = require('./routes/user.route')

const app = express()
ConnectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//entrypoint
app.use('/api',userroute)


module.exports = app