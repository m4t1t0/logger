'use strict';

var koa = require('koa');
var app = module.exports = koa();

app.use(require('./routes.js'));

var port = process.env.PORT || 4291;
app.listen(port);
