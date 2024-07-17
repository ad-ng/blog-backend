const express = require('express')
const app = express()
require('dotenv').config()
const blog_router = require('./routes/blog-routes')
const db = require('../server/config/mongo')
const user_router = require('./routes/user-routes')



// Middleware
app.use(express.json())

// Router
app.use('/blog/', blog_router)
app.use('/user/',user_router)


// Start server
app.listen(process.env.PORT, () => console.log(`server started at ${process.env.PORT}!`))
