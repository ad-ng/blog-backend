const express = require('express')
const user_get = require('../controllers/user_controllers/user_get')
const user_finder = require('../middlewares/user_finder')
const user_get_id = require('../controllers/user_controllers/user_get_id')
const user_post = require('../controllers/user_controllers/user_post')
const user_delete = require('../controllers/user_controllers/user_delete')
const user_login = require('../controllers/user_controllers/user_login')
const user_router = express.Router()

user_router.get('/',user_get)
user_router.get('/:_id',user_finder,user_get_id)
user_router.post('/',user_post)
user_router.post('/login',user_login)
user_router.delete('/:_id',user_finder,user_delete)


module.exports = user_router