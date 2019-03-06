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

// router.post("/:userName/bookmark", (req, res, next) => {
//   const { userName } = req.params;

//   console.log(req.body);

//   User.findOne({ name: { $eq: userName } })
//     .then(countrieFavArray => {
//       Countrie.findByIdAndUpdate(
//         req.user._id,
//         { $push: { friendsBookmark: userVisited._id } },
//         { runValidators: true, new: true }
//       )
//         .then(userDocEdit => res.json(userDocEdit))
//         .catch(err => next(err));
//     })
//     .catch(err => next(err));
// });

module.exports = router;
