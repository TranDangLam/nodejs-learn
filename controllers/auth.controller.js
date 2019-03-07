var db=require('../db');
var md5=require('md5');
module.exports.login=function(req,res){
  res.render('auth/login');
};
module.exports.postLogin=function(req,res){
  var email=req.body.email;//lay email tu form gui len
  var password=req.body.password;//lay password tu form gui len
  var user=db.get('users').find({email:email}).value();
  if(!user){
    res.render('auth/login',{
      errors:['User does not exist'],
      value:req.body
    });

    return;
  }
  var hashedPassword=md5(password);
  if(user.password!==hashedPassword){
    res.render('auth/login',{
      errors:["wrong password"],//gui ve loi
      value:req.body//gui lai gia tri da dien vao form
    });
    return;
  }
  res.cookie('userId',user.id,{signed:true});//cho nguoi dung cookie id
  res.redirect('/users');
};