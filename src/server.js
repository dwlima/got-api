const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config.json');
const errorHandler = require('./_helpers/error-handler');


const app = express();

const server = require('http').Server(app);

mongoose.connect(config.connectionString,{
  useNewUrlParser: true
});

// for debug
//mongoose.set('debug', true);
//mongoose.set('bufferCommands', false);

// define connection events
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected!');

  app.use((req, res, next) => {
    next();
  });

  app.use(cors());

  app.use(express.json());

  // use JWT auth to secure the api
  //app.use(jwt());

  // routes
  app.use(require('./routes'));

  // global error handler
  app.use(errorHandler);

  // start server
  const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
  server.listen(port, function () {
    console.log('GOT API Server listening on port ' + port);
  });

});


mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

module.exports = app;