"use strict";
var mongoose = require('mongoose');
var StorageManager = (function () {
    function StorageManager() {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/test');
    }
    return StorageManager;
}());
exports.StorageManager = StorageManager;
//# sourceMappingURL=StorageManager.js.map