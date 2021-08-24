// import express from 'express';
// import dotenv from 'dotenv';
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

dotenv.config({ path: "./config.env" });

const Connection = require("./db/conn.js");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(require("./router/auth"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listenning form ${PORT}`);
});

Connection();
