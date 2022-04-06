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
var Instrument_1 = __importDefault(require("./Instrument"));
var Drums = /** @class */ (function (_super) {
    __extends(Drums, _super);
    function Drums(model, manufacturer, color, diameter) {
        var _this = _super.call(this, model, manufacturer, color) || this;
        _this.diameter = diameter;
        return _this;
    }
    Drums.prototype.display = function () {
        console.log(this.model, this.manufacturer, this.color, this.diameter);
    };
    return Drums;
}(Instrument_1.default));
exports.default = Drums;
