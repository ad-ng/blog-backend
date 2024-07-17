const express = require('express')
const blog_get = require('../controllers/blog-controllers/blog_get')
const blog_get_id = require('../controllers/blog-controllers/blog_get_id')
const blog_post = require('../controllers/blog-controllers/blog_post')
const blog_delete = require('../controllers/blog-controllers/blog_delete')
const blog_finder = require('../middlewares/blog_finder')
const blog_route= express.Router()



blog_route.get('/', blog_get)
blog_route.get('/:_id',blog_finder,blog_get_id)
blog_route.post('/',blog_post)
blog_route.delete('/:_id',blog_finder,blog_delete)






module.exports = blog_route
