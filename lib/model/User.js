"use strict";
var mongoose = require('mongoose');
var mongoose_1 = require("mongoose");
var user = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});
exports.User = mongoose.model('User', user);
//# sourceMappingURL=User.js.map