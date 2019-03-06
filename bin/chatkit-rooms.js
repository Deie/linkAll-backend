require("dotenv").config();

const mongoose = require("mongoose");
const Chatkit = require("@pusher/chatkit-server");

const Country = require("../models/countries-model.js");

const chatkit = new Chatkit.default({
  instanceLocator: process.env.CHATKIT_LOCATOR,
  key: process.env.CHATKIT_KEY
});

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

let count = 0;

Country.find()
  .then(countries => {
    countries.forEach(oneCountry => {
      oneCountry.RoomsCategories.forEach((oneCat, index) => {
        if (oneCat.chatkitId) {
          return;
        }
        let roomName = oneCountry.name + "-" + oneCat.roomName;
        if (roomName.length > 60) {
          roomName = oneCountry.name.slice(0, 54);
          roomName += "…-" + oneCat.roomName.slice(0, 4);
        }
        chatkit
          .createRoom({
            creatorId: process.env.CHATKIT_ADMIN,
            name: roomName
          })
          .then(room => {
            Country.findByIdAndUpdate(oneCountry._id, {
              $set: { [`RoomsCategories.${index}.chatkitId`]: room.id }
            })
              .then(() => console.log(`Room CREATED ${roomName} (${++count})`))
              .catch(err => {
                console.log(`Country Update Error ${roomName}`, err);
              });
          })
          .catch(err => {
            console.log(`Room Create Error ${roomName}`, err);
          });
      });
    });
  })
  .catch(err => {
    console.log("Country Find Error", err);
  });
