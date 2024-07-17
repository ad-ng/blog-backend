const { default: mongoose } = require("mongoose");
const user_model = require("../model/user_model");


async function user_finder(req,res,next){
    
    let user
    try {
        user= await user_model.findById(req.params._id)
        if(!user){
            return res.status(404).json({message:'user not found'})
        }
    } catch (error) {
        res.status(500).json({message:error})
    }
    res.user = user
    next()
}

module.exports = user_finder