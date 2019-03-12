var db=require('../db');
module.exports.addToCart=function(req,res,next){
  var productId=req.params.productId;
  var sessionId=req.signedCookies.sessionId;
  if(!sessionId){
    res.redirect('/products');
    return;
  }
  
  var count=db.get('sessions')
  .find({id:sessionId})
  .get('cart.'+productId,0)
  .value();//truyen vao tham so thu 2 de neu k co thi se co gia tri mac dinh la 0

  db.get('sessions')
  .find({id:sessionId})
  .set('cart.'+productId,count+1)
  .write();

  res.redirect('/products');
};