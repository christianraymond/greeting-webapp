const express = require('express');
const app = express();
var nameObj = {};

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

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.get('/greetedName', function(req, res) {
  console.log(nameObj);
  res.render('greetedName', {
    list: nameObj
  });
});

app.listen(app.get('port'), function() {
  console.log("App runnning on http://localhost:" + app.get('port'));
});

var storeAllNames = [];

app.post('/greeted', function(req, res) {
  var name = req.body.name;
  var language = req.body.language;

  if (nameObj[name] === undefined) {
    nameObj[name] = 0;
  }
  nameObj[name] += 1;

  storeAllNames.push(name);
  for (var n = 0; n < storeAllNames.length; n++) {}
  console.log(storeAllNames);
  if (language === 'isixhosa') {
    var langName = 'Molo ' + name;
  }
  if (language === 'french') {
    var langName = 'Bonjour ' + name;
  };
  if (language === 'english') {
    var langName = 'Hello ' + name;
  };

  var data = {
    langName: langName,
    nameObj: nameObj,
  }
  res.render('home', {
    data: data.langName
  });
  // res.render('greetedName', {data: data.nameObj})
  return {
    data
  }
});
