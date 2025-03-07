const validate = require("../utils/validate");
const express = require("express");
const authRoute = express.Router();
const db = require("../database");

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

authRoute.post("/addUser",(req,res)=>{
    try{
     let sql = "insert into users(emailId,password,role) values (?,?,?);"
     const values = [req.body.emailId,req.body.password,req.body.role];
     db.query(sql,values,(error,result)=>{
       if(error)
       {
         res.status(500).send({"errorMessage":error});
       }
       else
       {
        res.send("user added successfully!");
       }
     })
    }
    catch(error)
    {
      
    }
})

module.exports = authRoute;