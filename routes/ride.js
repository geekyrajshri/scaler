'use strict';
const express = require('express');
const pool = require('../database/connection');

const RideRouter = () => {
  const router = express.Router();

  router.route('/:ride_id/accept-ride').put((req, res) => {
    try { 
      const ride_id = parseInt(req.params.ride_id);
      const driver_id = req.body.driver_id;

      pool.query('UPDATE rides SET driver_id = $1 WHERE ride_id = $2',
      [driver_id, ride_id], 
      (error, result) => {
      if (error) {
        throw error
      }
      res.status(202).send(`Ride updates: ${JSON.stringify(result)}`)
    })
      } catch (err) {
       console.log(err);
      }
  });

  router.route('/:ride_id/update-status').put((req, res) => {
    try { 
      const ride_id = parseInt(req.params.ride_id);
      const ride_status = req.body.ride_status;

      pool.query('UPDATE rides SET ride_status = $1 WHERE ride_id = $2',
      [ride_status, ride_id], 
      (error, result) => {
      if (error) {
        throw error
      }
      res.status(202).send(`Ride updates: ${JSON.stringify(result)}`)
    })
      } catch (err) {
       console.log(err);
      }
  });


  router.route('/new').post((req, res) => {
    try { 
      const src = req.body.src ;
      const dest = req.body.dest;

      pool.query('INSERT INTO rides (src, dest) VALUES ($1, $2)', [src, dest], 
      (error, result) => {
      if (error) {
        throw error
      }
      res.status(201).send(`Ride created: ${JSON.stringify(result)}`)
    })
      } catch (err) {
       console.log(err);
      }
  });
  return router;
};

module.exports = RideRouter;
