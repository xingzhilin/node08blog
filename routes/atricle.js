var express = require('express');
var router = express.Router();

router.get('/add', function(req, res){
	res.send('add');
});
router.post('/add', function(req, res){
	res.send('add post');
});
router.get('/list', function(req, res){
	res.send('list');
});

router.get('/list/:id', function(req, res){
	res.send('detail');
});

module.exports = router;