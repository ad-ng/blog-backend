const express = require('express')
const blog_get = require('../controllers/blog_get')
const blog_post = require('../controllers/blog_post')
const finder = require('../middlewares/blog_finder')
const blog_get_id = require('../controllers/blog_get_id')
const blog_delete = require('../controllers/blog_delete')
const blog_route= express.Router()



blog_route.get('/', blog_get)
blog_route.get('/:_id',finder,blog_get_id)
blog_route.post('/',blog_post)
blog_route.delete('/:_id',finder,blog_delete)






module.exports = blog_route
