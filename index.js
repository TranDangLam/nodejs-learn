// console.log(process.env); hien bien moi truong
require('dotenv').config();//khai bao tren dau tien
// console.log(process.env.SESSION_SECRET);
var express = require('express');
var multer=require('multer');
var bodyParser = require('body-parser');
var cookieParser=require('cookie-parser');
var upload=multer({dest:'./public/uploads/'})
var port = 3000;
var db = require('./db');
var app = express();
var userRoute = require('./routes/user.route');
var authRoute=require('./routes/auth.route');
var authMiddleware=require('./middleware/auth.middleware');
var productRoute=require('./routes/product.route');
app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', function (req, res) {
  res.render('index');
});
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));//signed cookie,de doc duoc noi dung cua cookie gui len
app.use(express.static('public'));//tao duong dan static
app.use('/users',authMiddleware.requireAuth,userRoute);
app.use('/auth',authRoute);
app.use('/products',productRoute);
app.listen(port, function () {
  console.log('server is running on 3000 port');
});