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
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, height, width) {
        var _this = _super.call(this, color) || this;
        _this.height = height;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.getArea = function (height, width) {
        return height * width;
    };
    Rectangle.prototype.getPerimeter = function (height, width) {
        return height * 2 + width * 2;
    };
    Rectangle.prototype.display = function () {
        console.log(this.color, this.height, this.width);
        console.log(this.getArea(this.height, this.width), this.getPerimeter(this.height, this.width));
    };
    return Rectangle;
}(Shape_1.default));
exports.default = Rectangle;
