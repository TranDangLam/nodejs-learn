var express = require('express');
var router = express.Router();
//require user controller
var controller=require('../controllers/user.controller');
router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/create', controller.getCreate);
router.post('/create', controller.postCreate);
router.get('/:id', controller.id);
module.exports = router;