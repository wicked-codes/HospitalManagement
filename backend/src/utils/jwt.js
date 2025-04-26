const jwt = require("jsonwebtoken");

function createJWT(user){
    const token = jwt.sign({user_name: user.user_name, user_uid: user.user_uid}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRY});
    return token;
}

function verifyJWT(token){
    const isAuthenticated = jwt.verify(token, process.env.JWT_SECRET, (error, user)=>{
        if(error){
            return {
                success: false,
                user: null
            }
        }
        return {
            success: true,
            user: user
        }
    });
    return isAuthenticated;
}

module.exports = {
    createJWT,
    verifyJWT
}