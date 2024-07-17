const user_model = require("../../model/user_model");

async function user_get(req,res){
    res.status(200).json(await user_model.find())
}

module.exports = user_get