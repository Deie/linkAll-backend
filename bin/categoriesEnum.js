// this file (SEED) for adding the 4 categories to the API countries in our model
//###############################################################################

const mongoose = require("mongoose");
const countriesModel = require("../models/countries-model");

mongoose
  .connect("mongodb://localhost/linkall-server", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

countriesModel
  .find()
  .then(AllCountries => {
    AllCountries.forEach(oneElement => {
      oneElement.RoomsCategories.push(
        "Travel in",
        "Fooding",
        "Culture & language",
        "Time Out"
      );
      oneElement
        .save()
        .then(console.log("updated, it worked"))
        .catch(err => console.log(err));

      console.log(oneElement);
    });
  })
  .catch(err => console.log(err));
