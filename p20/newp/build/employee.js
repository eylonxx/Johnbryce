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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.salary);
    };
    Employee.prototype.greet = function () {
        console.log('hi sir');
    };
    return Employee;
}(Person_1.default));
exports.default = Employee;
