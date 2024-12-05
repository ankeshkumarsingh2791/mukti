const userModel = require('../Models/userModel')
const bcrypt = require('bcryptjs')
const  jwt = require('jsonwebtoken')
const loginController = async (req,res) => {
    try {
        const user = await userModel.findOne({email:req.body.email});
        if(!user){
            return res.status(200).send({message:`user not found`, success:false})
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password)
        if(!passwordMatch){
            return res.status(200).send({message:`invalid password or email`, success:false})
        }

        const token = jwt.sign({id:user._id}, process.env.jwt-token, {expiresIn: 'id'})

        res.status(200).send({message:`login successful`, success:true})
    } catch (error) {
       console.log(error) 
       res.status(500).send({message:`error in login1 ${error.message}`})
    }
}
const registerController = async (req,res) => {
    try {

        const existingUser =  await userModel.findOne({
            email:req.body.email
        })

        if(existingUser){
            return res.status(200).send({message:"user already exist", success:false})
        }

        const password = req.body.password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        req.body.password = hashPassword;
        
        const newUser = new userModel((req.body))
        await newUser.save()
        res.status(201).send({message:'Register Successful', success:true});
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:`Register controller ${error.message}`})
    }
}

const AuthController = async(req,res) => {
 try {
     const user = req.findOne(_id=req.body.userId)
     if(!user){
        return res.status(200).send({
            message:"User not found",
            success: false
        })
     }
     else {
        res.status(200).send({
            success:true,
            data:{
                name:user.name,
                email:user.email,

            },
        })
     }
 } catch (error) {
    console.log(error)
    res.status(500).send({
        message:'auth error',
        success: false,
        error
    })
 }
}

module.exports = {loginController, registerController, AuthController};