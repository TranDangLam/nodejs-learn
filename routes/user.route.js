var express = require('express');
var multer=require('multer');
var router = express.Router();
var upload=multer({dest:'./public/uploads/'})
//require user controller
var controller=require('../controllers/user.controller');
var validate=require('../validate/user.validate');
router.get('/',controller.index);//phai chya qua middle ware truoc roi moi vao dc trang user
router.get('/cookie',function(req,res,next){
  res.cookie('user-id',12345);
  res.send('hello');
});
router.get('/search', controller.search);
router.get('/create', controller.getCreate);
router.post('/create', upload.single('avatar'),validate.postCreate,controller.postCreate);
//check file avatar gui tu duoi client len
router.get('/:id', controller.id);
module.exports = router;