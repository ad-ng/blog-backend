const user_model = require("../../model/user_model")
const bcrypt = require('bcrypt')


async function user_post(req,res){
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(req.body.password,salt)
    const user = new user_model({
        name: req.body.name,
        email: req.body.email,
        password: hashed
    })
    try {
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.json({message:error})
    }
}

module.exports = user_post