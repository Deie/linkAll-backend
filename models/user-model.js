const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // document structure & rules defined here
    fullName: { type: String, required: true, minlength: 2 },
    pseudo: { type: String, required: true, unique: true, minlength: 2 },
    email: { type: String, required: true, unique: true, match: /^.+@.+\..+$/ },
    encryptedPassword: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: ["normal", "admin"],
      default: "normal"
    },
    age: { type: Number, require: true, min: 18, },
    location: { type: String, required: true },
    profileImg: { type: String, required: true },
    gender: {
      type: String,
      enum: ["female", "male", "neutral"],
      require: true
    },
    description: { type: String, maxlength: 72 },
    channelsBookmark: { type: Array}
  },
  {
    timestamps: true
  }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
