// this file (SEED) for adding the 4 categories to the API countries in our model
//###############################################################################

const mongoose = require("mongoose");
const countriesModel = require("../models/countries-model");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
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
      oneElement.RoomsCategories = [
        { roomName: "Travel in" },
        { roomName: "Fooding" },
        { roomName: "Culture & language" },
        { roomName: "Time Out" }
      ];
      oneElement
        .save()
        .then(console.log("updated, it worked"))
        .catch(err => console.log(err));

      console.log(oneElement);
    });
  })
  .catch(err => console.log(err));
