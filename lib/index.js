"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAsyncEffect = void 0;
var react_1 = require("react");
function useAsyncEffect(effect, deps) {
    (0, react_1.useEffect)(function () {
        var status = { active: true };
        void effect(status);
        return function () {
            var _a;
            status.active = false;
            (_a = status.cleanup) === null || _a === void 0 ? void 0 : _a.call(status);
        };
    }, deps);
}
exports.useAsyncEffect = useAsyncEffect;
