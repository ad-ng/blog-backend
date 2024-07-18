const bcrypt = require('bcrypt')
const user_model = require('../../model/user_model')
const jwt = require('jsonwebtoken')

async function user_login(req,res){
    const user = await user_model.findOne({email:req.body.email})
    try {
        if(!user) return res.status(400).json({message:"invalid email or password"})
        if(!await bcrypt.compare(req.body.password,user.password)){
            return res.send('invalid email or password')
        }else{
            const accesskey = jwt.sign({email : user.email,password: user.password},'hello')
            return res.send(accesskey)
        }  
    } catch (error) {
        ()=> res.send(error)
    }
}

module.exports = user_login