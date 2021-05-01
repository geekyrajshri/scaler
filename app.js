const express = require("express");
const bodyParser = require('body-parser');

const app = express();


const port = 2021;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const driversRoute = require('./routes/drivers')();
const driverRoute = require('./routes/driver')();

const ridesRoute = require('./routes/rides');
const rideRoute = require('./routes/ride')();

app.use('/api/drivers',driversRoute);

app.use('/api/driver',driverRoute);

// app.use('/api/rides',()=>{},ridesRoute);

app.use('/api/ride',rideRoute);

app.listen(port,()=>{
  console.log(`App listening to port ${port}`);
});
