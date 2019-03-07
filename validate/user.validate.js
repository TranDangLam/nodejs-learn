module.exports.postCreate=function(req,res,next){
  var errors=[];
  if(!req.body.name){
    errors.push("Name is required");
  }
  if(!req.body.phone){
    errors.push("Phone is required");
  }
  if(errors.length){
    res.render('users/create',{
      errors:errors,
      value:req.body
    });
    return;
  }
  res.locals.success=true;//bien local dung de luu tru trong vong doi req,res
  next();//de thoat ra neu k se treo 

};