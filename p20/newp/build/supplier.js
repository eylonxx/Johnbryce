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
var Person_1 = __importDefault(require("./Person"));
var Supplier = /** @class */ (function (_super) {
    __extends(Supplier, _super);
    function Supplier(firstName, lastName, type) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.type = type;
        return _this;
    }
    Supplier.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.type);
    };
    Supplier.prototype.greet = function () {
        console.log('hi man');
    };
    return Supplier;
}(Person_1.default));
exports.default = Supplier;
