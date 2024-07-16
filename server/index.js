const express = require('express')
const app = express()
require('dotenv').config()
const router = require('../server/routes/blog-endpoint')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Router
app.use('/blog/', router)



// Start server
app.listen(process.env.PORT, () => console.log(`server started at ${process.env.PORT}!`))
