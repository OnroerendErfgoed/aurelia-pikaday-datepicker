define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(fxconfig) {
        fxconfig.foo = "bar";
    }
    exports.configure = configure;
});