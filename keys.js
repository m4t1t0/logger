'use strict';

var keys = module.exports = {};

keys.getKeys = function() {
    return [
        {
            key_id: "CGr9nFbD",
            key_secret: "av]5S[f>jEG^R2f[3%#V$b]55(^q*?",
            realm: "backend"
        }
    ];
};

keys.searchKey = function(id, secret) {
    var keys = this.getKeys();

    for (var i = 0; i < keys.length; i++) {
        if (keys[i].key_id === id && keys[i].key_secret === secret) {
            return keys[i];
        }
    }

    return false;
};
