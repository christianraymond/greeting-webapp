const mongoose = require('mongoose');
module.exports = function(mongoURL) {
    mongoose.connect(mongoURL);

    const greetSchema = mongoose.Schema({
      name: String,
      counter: Number
    });

    const greet = mongoose.model('greet', greetSchema);
    return {
      greet
    };
}
