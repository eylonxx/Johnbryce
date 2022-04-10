"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = __importDefault(require("./Shape"));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function (radius) {
        return Math.PI * radius * radius;
    };
    Circle.prototype.getPerimeter = function (radius) {
        return 2 * Math.PI * radius;
    };
    Circle.prototype.display = function () {
        console.log(this.color, this.radius);
        console.log(this.getArea(this.radius), this.getPerimeter(this.radius), this.getDiameter(this.radius));
    };
    Circle.prototype.getDiameter = function (radius) {
        return radius * 2;
    };
    return Circle;
}(Shape_1.default));
exports.default = Circle;
