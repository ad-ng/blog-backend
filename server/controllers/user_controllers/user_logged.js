
async function user_logged(req,res){
    res.status(200).json(req.user)
}

module.exports = user_logged