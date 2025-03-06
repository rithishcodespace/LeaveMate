require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const authRoute = require("./routes/authRoute");
const db = require("./database");
const applyleaveRoute = require("./routes/applyleave");
const fetchRoute = require("./routes/fetchRoute");

app.use(express.json());
app.use(cors());
app.use("/",authRoute);
app.use("/",applyleaveRoute);
app.use("/",fetchRoute);
app.listen(PORT,()=>console.log(`sever successfully running on localhost:${PORT}`));

