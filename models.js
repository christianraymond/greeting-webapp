const mongoose = require('mongoose');
module.exports = function(mongoURL) {
    mongoose.connect(mongoURL);

    const greetSchema = mongoose.Schema({
      name: String,
      counter: Number
    });

    const greet = mongoose.models('greet', greetSchema);
    return {
      greet
    };
}
