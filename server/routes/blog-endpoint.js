const express = require('express')
const blog_get = require('../controllers/blog_get')
const blog_post = require('../controllers/blog_post')
const finder = require('../middlewares/blog_finder')
const blog_get_id = require('../controllers/blog_get_id')
const blog_delete = require('../controllers/blog_delete')
const router = express.Router()



router.get('/', blog_get)
router.get('/:_id',finder,blog_get_id)
router.post('/',blog_post)
router.delete('/:_id',finder,blog_delete)






module.exports = router