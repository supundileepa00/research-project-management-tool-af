const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;

//load/run app on the port
app.listen(PORT, () => {
  console.log("Server is up and running on ", PORT);
});

mongoose.connect(URL, {
  //useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false
});

//database connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection Success!!");
});
