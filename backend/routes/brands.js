import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql';

export const brandsRoute = express.Router();

brandsRoute.get('/', (req, res) => {
    const pool = req.pool
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`connected as id ${connection.threadId}`)
        connection.query('select * from brands', (err, rows) => {
            connection.release();
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        })
    })
})
