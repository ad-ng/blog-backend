
async function blog_get_id(req,res){
    res.json(await res.blog)
}
module.exports = blog_get_id