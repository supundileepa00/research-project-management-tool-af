const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

//load/run app on the port
app.listen(PORT, () => {
  console.log("Server is up and running on ", PORT);
});
