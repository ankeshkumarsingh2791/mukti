const jwt = require('jsonwebtoken')
const { token } = require('morgan')

module.exports = async(req, res, next) => {
   
    try {
        const getToken = req.headers['authorization'].split(" ")[1]

        // verify jwt token 
    
        jwt.verify(token, process.env.jwt-token,(err, decode) => {
            if(err){
                return res.status(200).send({
                    message:"Authentication Failed",
                    success:false
                })
            } else {
                req.body.userId = decode._id
                next()
            }
        });
        
    } catch (error) {
        console.log(error)
        res.status(401).send({
            message:"Auth Failed",
            success:false
        })
    }
    
}