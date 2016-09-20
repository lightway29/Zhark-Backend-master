"use strict";
var Error = (function () {
    function Error(code, status, message) {
        this.error = {
            code: code,
            status: status,
            message: message
        };
    }
    Error.prototype.toString = function () {
        return JSON.stringify(this.error);
    };
    return Error;
}());
exports.Error = Error;
//# sourceMappingURL=Error.js.map