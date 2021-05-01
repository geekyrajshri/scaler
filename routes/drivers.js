'use strict';
const express = require('express');
const pool = require('../database/connection');
const router = express.Router();

const driversRouter = function drivers() {
  router.route('/new').post(async function addDriver(req, res) {
    try { 
    const { name, phone_number } = req.body
    pool.query('INSERT INTO drivers (name, phone_number,rating) VALUES ($1, $2,0)', [name, phone_number], 
    (error, result) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Driver added with ID: ${JSON.stringify(result)}`)
  })
    } catch (err) {
     console.log(err);
    }
  });
  return router;
};

module.exports = driversRouter;
