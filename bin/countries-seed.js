require('dotenv').config();

const mongoose = require('mongoose');
const axios = require("axios");
const Countries = require('../models/countries-model');

mongoose
  .connect('mongodb://localhost/linkall-server', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

axios.get("https://restcountries.eu/rest/v2/")
  .then(response => {
    Countries.insertMany(response.data)
  })
  .catch(err => console.log("error", err))


