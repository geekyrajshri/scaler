'use strict';
const express = require('express');
const pool = require('../database/connection');

const driversRouter = () => {
  const router = express.Router();
  console.log("Inside");

  router.route('/').post(async function addDriver(req, res) {
    console.log("Inside");
    try { 
    const { name, phone_number } = req.body
    pool.query('INSERT INTO drivers (name, phone_number,rating) VALUES ($1, $2,0)', [name, phone_number], 
    (error, result) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Driver added with ID: ${result.insertId}`)
  })
    } catch (err) {
     console.log(err);
    }
  });
  return router;
};

module.exports = driversRouter;
