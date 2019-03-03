const express = require("express");

const User = require("../models/user-model");

const router = express.Router();

router.get("/:userPseudo", (req, res, next) => {
  const { userPseudo } = req.params;

  User.findOne({ pseudo: { $eq: userPseudo } })
    .then(userDoc => res.json(userDoc))
    .catch(err => next(err));
});


module.exports = router;