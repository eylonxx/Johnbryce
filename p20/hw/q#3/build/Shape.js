"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
        Shape.count++;
    }
    Shape.count = 0;
    return Shape;
}());
exports.default = Shape;
