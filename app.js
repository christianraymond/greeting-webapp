const express = require('express');

const app = express();
// app.disable('x-powered-by');
const handlebars = require('express-handlebars').create({defaultLayout:'main'});
const bodyParser = require('body-parser');
// const greetingRoutes = require('greeted');
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));
//MORE IMPORTS HERE
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/contact', function(req, res){
    res.render('contact');
});
// app.post('/greeted/name', greetingRoutes.name);

app.listen(app.get('port'), function(){
    console.log("App runnning on http://localhost:" + app.get('port'));
});
