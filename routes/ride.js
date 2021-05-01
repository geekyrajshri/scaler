'use strict';
const express = require('express');

const RideRouter = (client) => {
  const router = express.Router();

  router.route('/').get((req, res) => {
    
  });

  router.route('/:id').get((req, res) => {
    
  });

  return router;
};

module.exports = RideRouter;
