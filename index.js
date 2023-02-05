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

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log({ err });
    process.exit(1);
  });

app.listen(PORT);
console.log("server is started ...");
app.get("/", (req, res) => {
  res.send("hi");
  console.log("GET ROOT 200 ...");
});
