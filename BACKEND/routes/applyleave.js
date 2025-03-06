const express = require("express");
const applyleaveRoute = express.Router();
const db = require("../database");

applyleaveRoute.post("/applyleave",(req,res)=>{
  try{
    const sql = "insert into applications (leavetype, fromdate, fromtime, todate, totime, reason) values(?,?,?,?,?,?)";
    const values = [req.body.leavetype,req.body.fromdate,req.body.fromtime,req.body.todate,req.body.totime,req.body.reason];
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

module.exports = applyleaveRoute;