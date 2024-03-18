require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const router = require("./router");

const app = express();

app.use(cors("*"));

app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send("on et la !");
});

app.use("/api", router);

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found !" });
});

module.exports = app;
