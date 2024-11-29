const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Data base Connection successful ${mongoose.connection.host}`.bgGreen.white)
    } catch (error) {
      console.log(`MongoDb server Issue ${error} `.bgRed.white)  
    }
}

module.exports =  connectDB