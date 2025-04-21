const mongoose = require('mongoose')

const connected = mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Db was connected successfully")
}).catch(error=>console.log(error))

module.exports = connected