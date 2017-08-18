var mongoose = require('mongoose');
mongoose.connet('mongodb://localhost/greeting-webapplication');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  //I am connected!
  var greetSchema = mongoose.Schema({
    //Everything you puts here will be saved in the database
    name: String,
    counter: Number
  });

const greet = mongoose.models('greetSchema');
});
