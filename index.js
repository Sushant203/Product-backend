const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const productRoute = require("./route/productRoute.js");
const categoryRoute = require("./route/categoryRoute.js");

const app = express();

app.use(express.json());
app.use("/product", productRoute);
app.use("/category", categoryRoute);
mongoose.connect(process.env.Db_URL);
app.listen(4000, (req, res) => {
  console.log("server running...");
});
