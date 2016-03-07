'use strict';

var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/percentil');
var logs = wrap(db.get('logs'));

var Log = module.exports = {};

Log.save = function(content) {
    logs.insert(content, function(err, doc) {
        if (err) {
            throw err;
        }
    });
};
