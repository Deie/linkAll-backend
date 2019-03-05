const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
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
    profileImg: { type: String, required: true, default:"../public/images/userDefault.svg" },
    gender: {
      type: String,
      enum: ["female", "male", "neutral"],
      required: true
    },
    description: { type: String, maxlength: 72, match: /^(#+\w{2,})( #+\w{2,}){0,5}$/ },
    userState: { type: String, enum: ["online", "offline", "blocked"]},
    channelsBookmark: [{ type: Schema.Types.ObjectId, ref: "Countries" } ] 
  },
  {
    timestamps: true
  }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
