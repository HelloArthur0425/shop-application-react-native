import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql';

import brandsRoute from './routes/brands.js';
import sneakersRoute from './routes/sneakers.js';

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const mysql = require("mysql");

// const brandsRoute = require("./routes/brands.js");
// const sneakersRoute = require("./routes/sneakers.js");

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWARD,
  database: process.env.DB_DATEBASE,
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, Welcome to Arthur's Database!</h1>");
});

app.use(
  "/brands",
  (req, res, next) => {
    req.pool = pool;
    next();
  },
  brandsRoute
);
app.use(
  "/sneakers",
  (req, res, next) => {
    req.pool = pool;
    next();
  },
  sneakersRoute
);

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
