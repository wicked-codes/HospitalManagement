const {Router} = require("express");
const {auth} = require("./auth/index.js")
const apiRoutes = Router();

apiRoutes.use("/auth", auth);
module.exports = {
    apiRoutes
}