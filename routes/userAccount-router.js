const express = require("express");

const User = require("../models/user-model");

const router = express.Router();

router.post("/:userName/edit-user", (req, res, next) => {
  const { userName } = req.params;
  const { fullName, location, age, description, avatarURL } = req.body;

  User.findOneAndUpdate(
    { name: { $eq: userName } },
    { $set: { fullName, location, age, description, avatarURL } },
    { runValidators: true, new: true }
  )
    .then(userDocEdit => {
      res.json(userDocEdit);
      console.log(userDocEdit, "userdoc");
    })
    .catch(err => next(err));
});

router.delete("/:userName/delete", (req, res, next) => {
  const { userName } = req.params;

  User.findOneAndDelete(userName)
    .then(userDeleted => res.json(userDeleted))
    .catch(err => next(err));
});

router.patch("/favorite", (req, res, next) => {
  const { roomId } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { $addToSet: { channelsBookmark: roomId } },
    { new: true, runValidators: true }
  )
    .then(userDoc => res.json(userDoc))
    .catch(err => next(err));
});

router.get("/favorite", (req, res, next) => {
  res.json(req.user.channelsBookmark);
  console.log(req.user);
});

router.get("/:userName", (req, res, next) => {
  const { userName } = req.params;

  User.findOne({ name: { $eq: userName } })
    .then(userDoc => res.json(userDoc))
    .catch(err => next(err));
});

module.exports = router;
