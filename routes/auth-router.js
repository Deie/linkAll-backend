const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/user-model.js");

const router = express.Router();

router.post("/process-signup", (req, res, next) => {
  const {
    fullName,
    email,
    originalPassword,
    name,
    age,
    location,
    gender,
    description
  } = req.body;

  // enforce password rules (can't be empty and MUST have a digit)
  if (!originalPassword || !originalPassword.match(/[0-9]/)) {
    // this is like next(err) but we creating our own object
    next(new Error("Password can't be blank and must contain a number."));
    // use return to STOP the function here if the password is BAD
    return;
  }

  // encrypt the user's password before saving it
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);
  let { avatarURL } = req.body;

  if (!avatarURL) {
    avatarURL = "/images/userDefault.svg";
  }

  User.create({
    fullName,
    email,
    encryptedPassword,
    name,
    age,
    location,
    avatarURL,
    gender,
    description
  })
    .then(userDoc => {
      // Automatically log in the user after signup an account
      req.login(userDoc, () => {
        console.log(userDoc);

        // hide encryptedPassword before sending the json (its a security risk)
        userDoc.encryptedPassword = undefined;
        res.json(userDoc);
      });
    })
    .catch(err => next(err));
});

router.post("/process-login", (req, res, next) => {
  const { email, originalPassword } = req.body;

  // validate the email by searching the database for an account with that email
  User.findOne({ email: { $eq: email } })
    .then(userDoc => {
      // User.findOne() will give us NULL in userDoc if it found nothing
      if (!userDoc) {
        next(new Error("Email is incorrect. 🤦‍"));

        return;
      }

      const { encryptedPassword } = userDoc;

      // validate the password by using bcrypt.compareSync()
      // (bcrypt.compareSync() will return FALSE if the passwords don't match)
      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
        next(new Error("Password is incorrect. 🙀"));
        return;
      }
      req.login(userDoc, () => {
        // hide encryptedPassword before sending the json (its a security risk)
        userDoc.encryptedPassword = undefined;
        res.json(userDoc);
      });
    })
    .catch(err => next(err));
});

router.get("/logout", (req, res, next) => {
  // req.logOut() is a Passport method that removes the USER ID from the session
  req.logOut();

  res.json({ message: "You are logged out" });
});

module.exports = router;
