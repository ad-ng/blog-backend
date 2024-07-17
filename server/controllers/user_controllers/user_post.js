const user_model = require("../../model/user_model")


async function user_post(req,res){
    const user = new user_model({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.json({message:error})
    }
}

module.exports = user_post