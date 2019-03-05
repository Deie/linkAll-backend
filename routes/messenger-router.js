const express = require("express");

const Countries = require("../models/countries-model");

const router = express.Router();

router.get("/linkall-messenger", (req, res, next) => {
  const { RoomsCategories } = req.params;
  Countries.findById(RoomsCategories)
    .then(RoomsCategoriesDoc => res.json(RoomsCategoriesDoc))
    .catch(err => next(err));
});

module.exports = router;

// /linkall-messenger/{:oneCountry.name}/{RoomsCategories[0]}
