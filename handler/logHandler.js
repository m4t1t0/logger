'use strict';

var handler = module.exports = {};
var logModel = require('../model/logModel.js');
var keys = require('../keys.js');

handler.saveLog = function *() {
    var record = this.request.body;

    //Check keys
    if (typeof record.key_id === 'undefined' || typeof record.key_secret === 'undefined') {
        this.body = {http_code: 403, error_code: 2, error_message: 'Unauthorized', data: []};
        return;
    }

    var key = keys.searchKey(record.key_id, record.key_secret);
    if (key === false) {
        this.body = {http_code: 403, error_code: 2, error_message: 'Unauthorized', data: []};
        return;
    }

    record.realm = key.realm;

    //Delete the credentials
    delete record.key_id;
    delete record.key_secret;

    try {
        logModel.save(record);
    }
    catch (e) {
        this.body = {http_code: 500, error_code: 1, error_message: 'Unknow error', data: []};
    }

    this.body = {http_code: 200, data: [{_id: '123456789'}]};
};
