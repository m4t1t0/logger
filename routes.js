'use strict';

var router = require('koa-router')();
var koaBody   = require('koa-body');
var logHandler = require('./handler/logHandler.js');

router.get('/', function *getRoot() {
    this.body = {http_code: 200, data: [{status: 'Ok', version: '1.0.0'}]};
});

router.post('/log', koaBody(), logHandler.saveLog);

module.exports = router.middleware();
