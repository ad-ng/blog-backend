const express = require('express')
const app = express()
require('dotenv').config()
const router = require('../server/routes/blog-endpoint')
const db = require('../server/config/mongo')



// Middleware
app.use(express.json())

// Router
app.use('/blog/', router)

// Start server
app.listen(process.env.PORT, () => console.log(`server started at ${process.env.PORT}!`))
