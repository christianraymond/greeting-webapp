const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/greeting-webapplication";

mongoose.connect(mongoURL, {
  useMongoClient: true
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('database ready to be used!');
  }
});

const greetSchema = mongoose.Schema({
  name: String,
  counter: Number
});
//compile my model.
const greet = mongoose.model('greet', greetSchema);

module.exports = greet;
