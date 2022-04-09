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
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, side) {
        var _this = _super.call(this, color) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.getArea = function (side) {
        return side * side;
    };
    Square.prototype.getPerimeter = function (side) {
        return side * 4;
    };
    Square.prototype.display = function () {
        console.log(this.color, this.side);
        console.log(this.getPerimeter(this.side), this.getArea(this.side));
    };
    return Square;
}(Shape_1.default));
exports.default = Square;
