var express = require('express');
var router = express.Router();
//require user controller
var controller=require('../controllers/user.controller');
var validate=require('../validate/user.validate');
router.get('/', controller.index);
router.get('/cookie',function(req,res,next){
  res.cookie('user-id',12345);
  res.send('hello');
});
router.get('/search', controller.search);
router.get('/create', controller.getCreate);
router.post('/create', validate.postCreate,controller.postCreate);
router.get('/:id', controller.id);
module.exports = router;