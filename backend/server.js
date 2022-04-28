const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGODB_URL;

app.use(cors());
app.use(bodyParser.json());

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

//router
const StudentRouter = require("./routes/adminRoutes/student");
app.use("/rpmt/students", StudentRouter);

const TopicRouter = require("./routes/adminRoutes/topics");
app.use("/rpmt/topics", TopicRouter);

//load/run app on the port
app.listen(PORT, () => {
  console.log("Server is up and running on ", PORT);
});
