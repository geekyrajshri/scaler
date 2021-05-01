'use strict';
const express = require('express');

const RidesRouter = (client) => {
  const router = express.Router();

  router.route('/').get((req, res) => {
    try { 
      const customer_id = req.query.filter.src;
      const src = req.query.filter.src;
      const dest = req.params.filter.dest;
  
      pool.query('SELECT * from rides (customer_id,src,dest) VALUES ($1, $2,$3)', [customer_id,src, dest], 
      (error, result) => {
      if (error) {
        throw error
      }
      res.status(200).send(result.rows)
    })
      } catch (err) {
       console.log(err);
      }
  });

 

  return router;
};

module.exports = RidesRouter;
