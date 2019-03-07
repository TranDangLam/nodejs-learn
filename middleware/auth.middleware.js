var db=require('../db');
module.exports.requireAuth=function(req,res,next){
  if(!req.signedCookies.userId){//signed coookie

    res.redirect('/auth/login');
    return;
  }
  var user=db.get('users').find({id:req.signedCookies.userId}).value();
  if(!user){
    res.redirect('/auth/login');
    return;
  }
  res.locals.user=user;//luu user vao bien local de hien thi ten nguoi dang nhap
  next();
};