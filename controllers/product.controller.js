var db=require('../db');

module.exports.index=function(req,res){
  var page=parseInt(req.query.page)||1;//neu k co thi mac dinh page bang 1
  var perPage=8;
  var begin=(page-1)*perPage;
  var end=page*perPage;
  var products=db.get('products').value().slice(begin,end);
  res.render('products/index',{
    products:products
  });

};