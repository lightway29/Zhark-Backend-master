"use strict";
var User_1 = require("../model/User");
var Q = require('q');
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUsers = function () {
        var defer = Q.defer();
        User_1.User.find({}, function (err, users) {
            if (err) {
                defer.reject(err);
            }
            else {
                defer.resolve(users);
            }
        });
        return defer.promise;
    };
    UserService.prototype.saveUser = function (data) {
        var defer = Q.defer();
        new User_1.User(data).save(function (err) {
            if (err) {
                defer.reject(err);
            }
            else {
                defer.resolve();
            }
        });
        return defer.promise;
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map