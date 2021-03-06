require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");

// Passport settings
//----------------------------------------------------------------
require("./config/passport-setup");

// MONGOOSE SETUP
//----------------------------------------------------------------
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

const app = express();

// MONGOSTORE SETUP
//---------------------------------------------------------------
// Make the app create sessions & cookies for every browser/device
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    //secret session must be different for every app DONE
    secret: process.env.SESSION_SECRET,
    //save session info inside ou MongoDB
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// Passport Auth settings
//----------------------------------------------------------------
// Activate some of the passport methods in the routes
app.use(passport.initialize());
// Load the logged
app.use(passport.session());

// Middleware Setup
//----------------------------------------------------------------
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
//----------------------------------------------------------------
app.use(express.static(path.join(__dirname, "public")));

// CORS SETTINGS
//----------------------------------------------------------------
app.use(
  cors({
    // receive cookies from other domains/origins
    credentials: true,
    // only these domains/origins can access the API
    origin: ["http://localhost:3000"]
  })
);

// ROUTES
//----------------------------------------------------------------
const auth = require("./routes/auth-router");
// all routes in the phone router will start with "/api"
// (ex: "/logout" =>>> "/api/logout")
app.use("/api", auth);

const file = require("./routes/file-router.js");
app.use("/api", file);

const countries = require("./routes/countries-router");
app.use("/api/countries", countries);

const account = require("./routes/userAccount-router");
app.use("/api/account", account);

module.exports = app;
