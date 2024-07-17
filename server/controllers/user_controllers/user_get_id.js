async function user_get_id(req,res){
    res.json(await res.user)
}
module.exports = user_get_id