const {Router} = require("express");

const auth = Router();

auth.post("/login", login);
auth.post("/register", register);
auth.post("/forgot-password", forgotPassword);

function login(req,res){
    const {email="", password=""} = req.body;
    
}