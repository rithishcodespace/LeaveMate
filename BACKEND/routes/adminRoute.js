const express = require("express");
const adminRoute = express.Router();
const db = require("../database");

adminRoute.patch("/acceptapplication/:id",(req,res)=>{
    try{
      let sql = "update applications set status='accepted' where id=?"
      var value = [req.params.id];
      db.query(sql,value,(error,result)=>{
        if(error)
        {
            res.status(500).send({"errorMessage":error})
        }
        else{
            res.send("status updated successfully!");
        }
      })
    }
    catch(error)
    {
      res.send(error);
    }
})

adminRoute.patch("/rejectapplication/:id",(req,res)=>{
    try{
      let sql = "update applications set status='rejected' where id=?"
      var value = [req.params.id];
      db.query(sql,value,(error,result)=>{
        if(error)
        {
            res.status(500).send({"errorMessage":error})
        }
        else{
            res.send("status updated successfully!");
        }
      })
    }
    catch(error)
    {
      res.send(error);
    }
})

adminRoute.get("/fetchpending",(req,res)=>{
    try{
      let sql = "select * from applications where status = 'pending'";
      db.query(sql,(error,result)=>{
       if(error)
       {
        res.status(505).send({"errorMessage":error});
       }
       else res.send(result);
      })

    }
    catch(error)
    {
      res.send({errorMessage:error});
    }
})

module.exports = adminRoute;