var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var db = require('./db');
var app = express();
var userRoute = require('./routes/user.route');
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', function (req, res) {
  res.render('index');
});
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));//tao duong dan static
app.use('/users', userRoute);
app.listen(port, function () {
  console.log('server is running on 3000 port');
});