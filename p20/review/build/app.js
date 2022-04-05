"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cat_1 = __importDefault(require("./cat"));
var firstCat = new cat_1.default('Mitsi', -4, 'White', -20);
console.log('the age: ' + firstCat.age);
firstCat.age = 5;
firstCat.display();
console.log('price is: ' + firstCat.price);
firstCat.price = 30;
console.log('price is: ' + firstCat.price);
