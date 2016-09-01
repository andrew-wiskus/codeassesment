var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//modules
var heroes = require('./routes/heroes');
var index = require('./routes/index');

//parse that ish
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json()); // needed for angular requests

//routes
app.use('/heroes', heroes);
app.use('/', index);
//ohmongod(b)
var databaseUri = 'mongodb://localhost:27017/omicron';

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose failed to connect because error: ', err);
});
/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('Listening on port', app.get('port'));
});
