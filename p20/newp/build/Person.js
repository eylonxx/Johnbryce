"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.display = function () {
        console.log(this.firstName, this.lastName);
    };
    return Person;
}());
exports.default = Person;
