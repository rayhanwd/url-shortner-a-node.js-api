var express = require("express");
const dotenv = require("dotenv");
const { urlRoute } = require("./routers");
const connectDB = require("./db/db");
var app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", urlRoute);
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
