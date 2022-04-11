"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayOperations = /** @class */ (function () {
    function ArrayOperations() {
    }
    ArrayOperations.getSum = function (arr) {
        return arr.reduce(function (prev, curr) { return prev + curr; }, 0);
    };
    ArrayOperations.getAvg = function (arr) {
        return arr.reduce(function (prev, curr) { return prev + curr; }, 0) / arr.length;
    };
    ArrayOperations.getMax = function (arr) {
        return Math.max.apply(Math, arr);
    };
    ArrayOperations.getMin = function (arr) {
        return Math.min.apply(Math, arr);
    };
    return ArrayOperations;
}());
exports.default = ArrayOperations;
