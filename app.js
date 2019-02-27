require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

// Passport settings
require("./config/passport-setup");

mongoose
  .connect('mongodb://localhost/linkall-server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app = express();

// Allow Cross-Origin-Resource-Sharing : CORS
//(allows access to the API from other domains/origins)
app.use(cors({
  // receive cookies from other domains/origins
  credentials: true,
  // only these domains/origins can access the API
  origin: ["http://localhost:3333"]
})
);

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
// Express View engine setup
app.use(express.static(path.join(__dirname, 'public')));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
app.use('/', index);


module.exports = app;
