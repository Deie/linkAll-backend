const express = require("express");

const Country = require("../models/countries-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Country.find()
    //send the DB query results array as a Json response to the client
    .then(countriesResult => {
      console.log(countriesResult);
      res.json(countriesResult);
    })
    .catch(err => next(err));
});

module.exports = router;
