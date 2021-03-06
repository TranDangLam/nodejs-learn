var User=require('../models/user.model');
var shortid = require('shortid');

module.exports.index=async function (req, res) {
  var users=await User.find();
  res.render('users/index',{
    users:users
  });
};

module.exports.search=async function (req, res) {
  var q = req.query.q.toLowerCase();
  var matchedUser=await User.find({
    name: /q/i
  });
  // var matchedUsers = db.get('users').value().filter(function (user) {
  //   return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  // });
  res.render('users/index', {
    users: matchedUsers.toLowerCase()
  });
};

module.exports.getCreate=function (req, res) {
  console.log(req.cookies);
  res.render('users/create');
};

module.exports.postCreate=function (req, res) {
  // console.log(req.body);
  req.body.id=shortid.generate();
  db.get('users').push(req.body).write();
  res.redirect('/users');
};

module.exports.id=function (req, res) {
  var id = parseInt(req.params.id);
  var user = db.get('users').find({
    id: id
  }).value();
  res.render('users/view', {
    user: user
  });
};