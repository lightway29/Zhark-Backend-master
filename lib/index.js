"use strict";
var bodyParser = require('body-parser');
var express = require('express');
var UserRoute_1 = require("./routes/UserRoute");
var StorageManager_1 = require('./storage/StorageManager');
var UserService_1 = require("./service/UserService");
var Server = (function () {
    function Server() {
        new StorageManager_1.StorageManager();
        this.application = express();
        this.config();
        this.routes();
        this.application.listen('8001');
    }
    Server.prototype.config = function () {
        this.application.use(bodyParser.urlencoded({ extended: true }));
        this.application.use(bodyParser.json());
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        var userService = new UserService_1.UserService();
        var userRoute = new UserRoute_1.UserRoute(router, userService);
        userRoute.initialize();
        this.application.use(router);
    };
    return Server;
}());
var server = new Server();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = server.application;
//# sourceMappingURL=index.js.map