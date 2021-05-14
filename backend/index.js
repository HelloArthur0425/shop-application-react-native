import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql';

import { brandsRoute } from './routes/brands.js';

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
})

app.get('/', (req, res) => {
    res.send("<h1>Hello, Welcome to Arthur's Database!</h1>");
});

app.use('/getAllBrands', (req, res, next) => {
    req.pool = pool;
    next();
}, brandsRoute)

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
})