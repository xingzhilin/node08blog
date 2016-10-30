var express = require('express');
var router = express.Router();

router.get('/signUp', function(req, res){
	res.send('注册');
});
router.post('/signUp', function(req, res){
	res.send('注册post');
});
router.get('/signIn', function(req, res){
	res.send('登录');
});
router.post('/signIn', function(req, res){
	res.send('登录post');
});
router.get('/signOut', function(req, res){
	res.redirect('/');
});

module.exports = router;