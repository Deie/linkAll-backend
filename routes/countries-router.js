const express = require("express");

const Phone = require("../models/countries-model");

const router = express.Router();


router.get("/countries", (req, res, next) => {
  Phone.find()
    //send the DB query results array as a Json response to the client
    .then(countriesResult => res.json(countriesResult))
    .catch(err => next(err))
})


module.exports = router;