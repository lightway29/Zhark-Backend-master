"use strict";
var Error_1 = require("../model/Error");
var HttpStatus_1 = require("../util/HttpStatus");
var UserRoute = (function () {
    function UserRoute(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    UserRoute.prototype.initialize = function () {
        var _this = this;
        this.router.post('/user', function (req, res, next) {
            var request = req;
            _this.userService.saveUser(request.body).then(function () {
                res.status(HttpStatus_1.HttpStatus.success).send('User saved success');
            }, function () {
                var error = new Error_1.Error('10001', 500, 'User save failure');
                res.status(HttpStatus_1.HttpStatus.error).send(error.toString());
            });
        });
        this.router.get('/user', function (req, res, next) {
            _this.userService.getUsers().then(function (users) {
                res.status(HttpStatus_1.HttpStatus.success).send(JSON.stringify(users));
            }, function () {
                var error = new Error_1.Error('10001', 500, 'User retrieval failure');
                res.status(HttpStatus_1.HttpStatus.error).send(error.toString());
            });
        });
    };
    return UserRoute;
}());
exports.UserRoute = UserRoute;
//# sourceMappingURL=UserRoute.js.map