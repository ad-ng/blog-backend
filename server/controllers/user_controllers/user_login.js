const bcrypt = require('bcrypt')
const user_model = require('../../model/user_model')

async function user_login(req,res){
    const user = await user_model.findOne({email:req.body.email})
    try {
        if(!user) return res.status(400).json({message:"invalid email or password"})
        if(await bcrypt.compare(req.body.password,user.password)){
            return res.send("you are now authenticated")
        }else{
            return res.send('invalid email or password')
        }  
    } catch (error) {
        ()=> res.send(error)
    }
}

module.exports = user_login