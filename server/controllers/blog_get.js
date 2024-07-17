const blog_model = require("../model/blog_model")



async function blog_get(req, res){
    res.status(200).json(await blog_model.find())
}

module.exports = blog_get