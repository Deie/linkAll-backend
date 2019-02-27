const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const countriesSchema = new Schema(
  {
    name: { type: String },
    flag: { type: String },
    capital: { type: String, },
    region: { type: String, },
    altSpellings: { type: String, },
    languages: { type: String, },
    translations: { type: Array, }
  },
  {
    timestamps: true
  }
);

const Countries = mongoose.model("Countries", countriesSchema);

module.exports = Countries