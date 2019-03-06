const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: { type: String, required: true, minlength: 2 },
    name: { type: String, required: true, unique: true, minlength: 2 }, // PSEUDO linked to CHATKIT
    email: { type: String, required: true, unique: true, match: /^.+@.+\..+$/ },
    encryptedPassword: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ["normal", "admin"],
      default: "normal"
    },
    age: { type: Number, require: true, min: 18 },
    location: { type: String, required: true },
    avatarURL: {
      type: String,
      required: true,
      default: "../images/userDefault.svg" // linked to CHATKIT img
    },
    gender: {
      type: String,
      enum: ["female", "male", "neutral"],
      required: true
    },
    description: {
      type: String,
      maxlength: 72,
      match: /^(#+\w{2,})( #+\w{2,}){0,5}$/
    },
    state: { type: String, enum: ["online", "offline", "blocked"] },
    // Array of chatkit Room IDs
    channelsBookmark: [ {type: Number} ],
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
