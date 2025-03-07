const express = require("express");
const fetchRoute = express.Router();
const db = require("../database")

fetchRoute.get("/accepted",(req,res)=>{
    try{
       const sql = "select leavetype, fromdate, fromtime, todate, totime, reason from applications where status = 'accepted'";
       db.query(sql,(error,result)=>{
          if(error)
          {
            return res.status(500).send({errorMessage:error})
          }
          else
          {
            res.send(result);
          }
       })
    }
    catch{
      console.log(error);
      res.send(500);
    }
})

fetchRoute.get("/pending",(req,res)=>{
    try{
       const sql = "select leavetype, fromdate, fromtime, todate, totime, reason from applications where status = 'pending'";
       db.query(sql,(error,result)=>{
          if(error)
          {
            return res.status(500).send({errorMessage:error})
          }
          else
          {
            res.send(result);
          }
       })
    }
    catch{
      console.log(error);
      res.send(500);
    }
})

fetchRoute.get("/rejected",(req,res)=>{
    try{
       const sql = "select leavetype, fromdate, fromtime, todate, totime, reason from applications where status = 'rejected'";
       db.query(sql,(error,result)=>{
          if(error)
          {
            return res.status(500).send({errorMessage:error})
          }
          else
          {
            res.send(result);
          }
       })
    }
    catch{
      console.log(error);
      res.send(500);
    }
})

fetchRoute.get("/history",(req,res)=>{
    try{
       const sql = "select leavetype, fromdate, fromtime, todate, totime, reason, status from applications";
       db.query(sql,(error,result)=>{
          if(error)
          {
            return res.status(500).send({errorMessage:error})
          }
          else
          {
            res.send(result);
          }
       })
    }
    catch{
      console.log(error);
      res.send(500);
    }
})

fetchRoute.post("/role",(req,res)=>{
  try{
    let sql = "select role from users where password = ?",
    values = [req.body.password];
    db.query(sql,values,(error,result)=>{
      if(error)
      {
        res.status(500).send(error);
      }
      else res.send(result[0]);
    })
  }
  catch(error)
  {
    res.status(500).send({"errorMessage":error})
  }
})

fetchRoute.post("/notify",(req,res)=>{
  try{
   let sql = "insert into notifications(fromdate,fromtime,todate,totime) values(?,?,?,?)";
   const values = [req.body.fromdate,req.body.fromtime,req.body.todate,req.body.totime,req.body.status];
   db.query(sql,values,(error,result)=>{
    if(error) 
    {
      res.status(500).send(error);
    }
    else 
    {
      res.send("notification added successfully");
    }
   })
  }
  catch(error)
  {
    res.status(404).send(error);
  }
})

module.exports = fetchRoute;