const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error));

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", require("./routes"));

app.listen(4000, () => {
  console.log("Listening on http://localhost:4000");
});
