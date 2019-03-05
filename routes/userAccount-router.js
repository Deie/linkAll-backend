const express = require("express");

const User = require("../models/user-model");

const router = express.Router();

router.get("/:userName", (req, res, next) => {
  const { userName } = req.params;

  User.findOne({ name: { $eq: userName } })
    .then(userDoc => res.json(userDoc))
    .catch(err => next(err));
});

router.post("/:userName/edit-user", (req, res, next) => {
  const { userName } = req.params;
  const { fullName, location } = req.body;

  User.findOneAndUpdate(
    { name: { $eq: userName } },
    { $set: { fullName, location } },
    { runValidators: true, new: true }
  )
    .then(userDocEdit => res.json(userDocEdit))
    .catch(err => next(err));
});

module.exports = router;
