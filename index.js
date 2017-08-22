const mongoURL = process.env.MONGO_DB_URL || "'mongodb://localhost/test'";
const mongoose = require('mongoose');
mongoose.connect(mongoURL);

var storeAllNames = {};
var namesArr = [];
var counter = {};
var name1;
var output = name1 + 'has been greeted ' + counter;

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
  res.render('greetedName', {
    storeAllNames: namesArr
  })
});

app.get('/counter', function(req, res) {
  res.render('counter', {
    counter: counter
  });
});

app.post('/greeted', function(req, res) {
  var name = req.body.name;
  name1 = name.charAt(0).toUpperCase() + name.slice(1)
  var language = req.body.language;

  //Check if the same name already exists and avoid deplications.
  if (storeAllNames[name1] == undefined) {
    namesArr.push(name1);
    storeAllNames[name1] = 1
  } else {
    storeAllNames[name1] += 1;
  }

  //Allow the counter to increament everytime a new name is created.
  if (counter[name1] === undefined) {
    counter[name1] = 0;
  }
  counter[name1] += 1;

  //Greet the person by the language of their choice.
  if (language === 'isixhosa') {
    var langName = 'Molo ' + name1 + ' !'
  }
  if (language === 'french') {
    var langName = 'Bonjour ' + name1 + '!';
  };
  if (language === 'english') {
    var langName = 'Hello ' + name1 + '!';
  };
//Route to redirect to how many times names was greeted 
  app.get('/names/:id', function(req, res){
    var name = req.params.id;
    res.render('names', {
      msg: name + ' was greeted ' + storeAllNames[name] + ' time(s)!'
    });
  });

  var data = {
    langName: langName,
    name1: name1,
    counter: output
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
