const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

//middleware
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

//routes
const ucenici = require("./routes/ucenik");
app.use("/ucenici", ucenici);

//povezivanje sa databazom
mongoose.connect(
  process.env.DB_NAME,
  { useNewUrlParser: true, useUnifiedTopology: true },
  async () => {
    try {
      console.log("[*] Databaza je uspjesno povezana.");
    } catch (err) {
      res.send({ Error: err });
    }
  }
);


// pokretanje servera
app.listen(process.env.PORT || 3000);



