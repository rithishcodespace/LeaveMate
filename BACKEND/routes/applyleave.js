const express = require("express");
const applyleaveRoute = express.Router();
const db = require("../database");

applyleaveRoute.post("/applyleave",(req,res)=>{
  try{
    const sql = "insert into applications (leavetype, fromdate, fromtime, todate, totime, reason) values(?,?,?,?,?,?,?,?)";
    const values = [req.body.leavetype,req.body.fromdate,req.body.fromtime,req.body.todate,req.body.totime,req.body.reason,req.body.name,req.body.emailId];
    db.query(sql,values,(error,result)=>{
        if(error)
        {
            return res.status(500).send({"errorMessage":error});
        }
        else
        {
            return res.send("application received successfully!");
        }
    })
  }
  catch(error)
  {
    res.send(error);
  }
})

applyleaveRoute.delete("/deleteleave/:id",(req,res)=>{
  try{
      let sql = "delete from applications where id=?";
      const values = [req.params.id];
      db.query(sql,values,(error,result)=>{
        if(error)res.status(505).send(error);
        else res.send("application deleted successfully!")
      })
  }
  catch(error){
      res.send(error);
  }
})

module.exports = applyleaveRoute;