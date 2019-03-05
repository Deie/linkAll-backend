const express = require("express");

const User = require("../models/user-model");

const router = express.Router();

router.get("/:userPseudo", (req, res, next) => {
  const { userPseudo } = req.params;

  User.findOne({ pseudo: { $eq: userPseudo } })
    .then(userDoc => res.json(userDoc))
    .catch(err => next(err));
});

router.get("/:userPseudo/edit", (req, res, next) => {
  const { userPseudo } = req.params;
  console.log(req.params.userPseudo, "get request");

  User.findOne({ pseudo: { $eq: userPseudo } })
    .then(userDoc => {
      res.json(userDoc), console.log("here is the get");
    })
    .catch(err => next(err));
});

router.post("/:userPseudo/edit", (req, res, next) => {
  const { userPseudo } = req.params;

  console.log(req.params.userPseudo, "post");

  const { fullName, age, location, profileImg, gender, description } = req.body;

  User.findOneAndUpdate(
    { pseudo: { $eq: userPseudo } },
    { $set: { fullName, age, location, profileImg, gender, description } },
    { runValidators: true, new: true }
  )
    .then(userDocEdit => {
      res.json(userDocEdit), console.log(userDocEdit, "userdoc" );
    })
    .catch(err => next(err));
});

router.delete("/:userPseudo/delete", (req, res, next) => {
  const { userPseudo } = req.params;

  User.findOneAndDelete(userPseudo)
    .then(userDeleted => res.json(userDeleted))
    .catch(err => next(err));
});

router.post("/:userPseudo/bookmark", (req, res, next) => {
  const { userPseudo } = req.params;

  console.log(req.body);

  User.findOne({ pseudo: { $eq: userPseudo } })
    .then(countrieFavArray => {
      Countrie.findByIdAndUpdate(
        req.user._id,
        { $push: { friendsBookmark: userVisited._id } },
        { runValidators: true, new: true }
      )
        .then(userDocEdit => res.json(userDocEdit))
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

module.exports = router;
