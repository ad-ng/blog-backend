const blog_model = require("../../model/blog_model")

async function blog_post(req,res){
    const blog = new blog_model({
        title: req.body.title,
        description: req.body.description
    })
    try {
        await blog.save()
        res.status(201).json(blog)
    } catch (error) {
        res.json({message:error})
    }
}

module.exports = blog_post