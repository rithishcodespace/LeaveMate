const validate = require("../utils/validate");
const express = require("express");
const authRoute = express.Router();

authRoute.post("/auth/login",(req,res)=>{
    try{
       validate(req);
       res.send("logged In successfully!")
    }
    catch(error)
    {
        res.status(500).send({"errorMessage":error});
    }
})

module.exports = authRoute;