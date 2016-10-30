var express = require('express');
var app = express();
var index = require('./routes/index');
var user = require('./routes/user');
var atricle = require('./routes/atricle');
//静态中间件

//路由
app.use('/', index); //首页
app.use('/user', user); //用户登录信息
app.use('/atricle', atricle); //文章
app.listen(8080);