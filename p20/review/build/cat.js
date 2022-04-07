"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class - template for Cat objects:
var Cat = /** @class */ (function () {
    // Constructor:
    function Cat(name, age, color, price) {
        // age --> local variable
        // this.age --> object variable
        this.name = name;
        this._age = age;
        this.color = color;
        this.chipCode = Math.floor(Math.random() * 1000000);
        this.price = price;
        console.log('One cat object has been created.');
    }
    Object.defineProperty(Cat.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0 || value > 30) {
                throw new Error('oh no');
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "price", {
        ///////////
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value < 0 || value > 100) {
                throw new Error('oh no must be ...');
            }
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    // Methods:
    Cat.prototype.eat = function () {
        console.log(this.name + ' is eating...');
    };
    Cat.prototype.display = function () {
        console.log('Name: ' + this.name);
        console.log('Age: ' + this._age);
        console.log('Color: ' + this.color);
        console.log('Chip Code: ' + this.chipCode);
    };
    return Cat;
}());
exports.default = Cat;
