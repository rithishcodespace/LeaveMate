require("dotenv");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host:"localhost",
    user:process.env.USER || "root",
    database:process.env.DATABASE || "leaveapproval",
    password:process.env.PASSWORD || "Rithish@2006" 
})

db.connect((error)=>{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log("db connected successfully!");
    }
})

module.exports = db;