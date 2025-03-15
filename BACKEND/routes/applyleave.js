const express = require("express");
const applyleaveRoute = express.Router();
const db = require("../database");

applyleaveRoute.post("/applyleave",(req,res)=>{
  try{
    const sql = "insert into applications (leavetype, fromdate, fromtime, todate, totime, reason, name, emailId) values(?,?,?,?,?,?,?,?)";
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

applyleaveRoute.patch("/edit/:id",(req,res)=>{
  try{
    let id = req.params.id;
    const {leavetype,fromdate,fromtime,todate,totime,reason} = req.body;
    let sql = `update applications set leavetype = ?, fromdate = ?, fromtime = ?, todate = ?, totime = ?, reason = ? where id = ${id}`;
    const values = [leavetype,fromdate,fromtime,todate,totime,reason];
    db.query(sql,values,(error,result)=>{
      if(error) res.send(error);
      else res.send("application updated successfully!")
    })
  }
  catch(error)
  {
    res.status(500).send({"errorMessage":error})
  }
})

module.exports = applyleaveRoute;