const express = require('express')
const app = express()
require('dotenv').config()

app.get('/',(req,res)=>res.send('hello word !'))

app.listen(process.env.PORT, () => console.log(`server started at ${process.env.PORT}!`))