const blog_model = require("../model/blog_model");

async function blog_delete(req,res){
    try {
        await blog_model.findByIdAndDelete(res.blog._id)
        res.send(`blog post deleted`)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports = blog_delete