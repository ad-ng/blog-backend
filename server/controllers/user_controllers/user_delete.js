const user_model = require("../../model/user_model")


async function user_delete(req,res){
    try {
        await user_model.findByIdAndDelete(res.user._id)
        res.send(`user deleted`)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports = user_delete