var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var heroSchema = new Schema({
    alias: String,
    first_name: String,
    last_name: String,
    city: String,
    power_name: String
});

// Step 2 - Create the model
var Hero = mongoose.model('Hero', heroSchema);

// Step 3 - Export our model so we can use it in other parts of our app
module.exports = Hero;
