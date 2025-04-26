const express = require("express");
const dotenv = require("dotenv");
const {logger} = require("./utils/logger");
const {apiRoutes} = require("./routes/index");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", apiRoutes);
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    logger.info(`App running in port : ${PORT}`);
});
