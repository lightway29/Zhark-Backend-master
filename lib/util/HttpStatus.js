"use strict";
(function (HttpStatus) {
    HttpStatus[HttpStatus["success"] = 200] = "success";
    HttpStatus[HttpStatus["error"] = 500] = "error";
})(exports.HttpStatus || (exports.HttpStatus = {}));
var HttpStatus = exports.HttpStatus;
//# sourceMappingURL=HttpStatus.js.map