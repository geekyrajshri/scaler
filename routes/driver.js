'use strict';
const express = require('express');
const pool = require('../database/connection');

const driverRouter = () => {
  const router = express.Router();

  // router.route('/').post(async function (req, res) {
    
  // });

  router.route('/:driver_id/rides').get((req, res) => {
    const ride_status = req.query.filter.ride_status;
    const driver_id = parseInt(req.params.filter.driver_id);

    pool.query('SELECT * FROM rides WHERE driver_id = $1 and ride_status=$2', [driver_id,ride_status], (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
    
  });


  return router;
};

module.exports = driverRouter;

