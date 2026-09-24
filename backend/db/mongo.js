require("dotenv").config();
const mongoose = require('mongoose')

async function connectMongo(){
    await mongoose.connect(process.env.MONGO_DB_URI, {family: 4})
    .then(() => {
        console.log('successfully connected to mongoDB!')
    }).catch((err) => {
        console.log('an error occurred: ', err.message)
    })
}

module.exports = connectMongo