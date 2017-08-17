var mongoose = require('mongoose');
mongoose.connet('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  //I am connected!
  var kitteySchema = mongoose.Schema({
    name: String
    var silence = new kitten({
      name: 'Silence'
    });
    console.log(silence.name);

    kittySchema.methods.speak = function() {
      var greeting = this.name ?
        "Meow name is " + this.name :
        "I don't have a name";
      console.log(greeting);
    }
    var fluffy = new kitten({
      name: 'fluffy'
    });
    fluffy.speak();
  })
  kitten.save(function(err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  })
  var kitten = mongoose.model('kitten', kitteySchema);
});
