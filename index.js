const mongoURL = process.env.MONGO_DB_URL || "'mongodb://localhost/test'";
const mongoose = require('mongoose');
mongoose.connect(mongoURL);

var storeAllNames = [];
var counter = {};
var name1;

const express = require('express');
const app = express();

const handlebars = require('express-handlebars').create({
  defaultLayout: 'main'
});
const bodyParser = require('body-parser');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));
//MORE IMPORTS HERE
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/about', function(req, res) {
  res.render('about');
});

app.get('/greetedName', function(req, res) {
  console.log(name1);
  res.render('greetedName', {
    storeAllNames: storeAllNames
  });
});

app.get('/counter', function(req, res) {
  console.log(counter);
  res.render('counter', {
    counter: counter
  });
});

app.post('/greeted', function(req, res) {
  var name = req.body.name;
   name1 = name.charAt(0).toUpperCase() + name.slice(1)
  var language = req.body.language;

  if (counter[name1] === undefined) {
    counter[name1] = 0;
  }
  counter[name1] += 1;

  storeAllNames.push(name1);

  for (var n = 0; n < storeAllNames.length; n++)
    console.log(storeAllNames);

  if (language === 'isixhosa') {
    var langName = 'Molo ' + name1 + '!';
  }
  if (language === 'french') {
    var langName = 'Bonjour ' + name1 + '!';
  };
  if (language === 'english') {
    var langName = 'Hello ' + name1 + '!';
  };

  var data = {
    langName: langName,
    counter: counter,
    name1: name1
  }
  res.render('home', {
    data: data.langName
  });
  // res.r
  return {
    data
  }
});
app.listen(app.get('port'), function() {
  console.log("App runnning on http://localhost:" + app.get('port'));
});
