const { configDotenv } = require("dotenv");
const { default: mongoose } = require("mongoose");

const mongodb = mongoose.connect(process.env.DB_URL)
.then(console.log('db connected'))
.catch(e=>console.log(e))

module.exports = mongodb
