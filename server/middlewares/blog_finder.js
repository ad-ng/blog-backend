const { default: mongoose } = require("mongoose");
const blog_model = require("../model/blog_model");


async function finder(req,res,next){
    
    let nblog
    try {
        nblog= await blog_model.findById(req.params._id)
        if(!nblog){
            return res.status(404).json({message:'user not found'})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
    res.blog = nblog
    next()
}

module.exports = finder