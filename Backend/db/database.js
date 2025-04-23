const mongoose = require('mongoose')

const ConnectDB = ()=>{
    mongoose.connect(process.env.MONGODB_URL).then(
        console.log('Database was sucessfully connect ')
    ).catch((error)=>{
        console.log(error)
    })
}
module.exports = ConnectDB