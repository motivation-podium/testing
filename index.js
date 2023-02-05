let cors = require("cors");
let express = require("express");
let mongoose = require("mongoose");
let cookieParser = require("cookie-parser");

let app = express();
let PORT = process.env.PORT;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv/config");



app.listen(8080);
console.log("server is started ...");
app.get("/", (req, res) => {
  res.send("hi");
  console.log("GET ROOT 200 ...");
});

app.post("/user",(req,res)=>{
  // let {user} = req.body;
  // if(user){res.json(req.body);}
  // else{res.send("Nothing")}
  console.log(req.body);
  res.json(req.body);
  console.log(req.query);
})