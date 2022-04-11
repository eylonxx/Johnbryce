"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayOperations_1 = __importDefault(require("./ArrayOperations"));
var getRandomNumber = function () {
    return Math.floor(Math.random() * 20);
};
var myArr = [];
for (var i = 0; i < 10; i++) {
    myArr.push(getRandomNumber());
}
console.log(myArr);
console.log(ArrayOperations_1.default.getSum(myArr));
console.log(ArrayOperations_1.default.getAvg(myArr));
console.log(ArrayOperations_1.default.getMax(myArr));
console.log(ArrayOperations_1.default.getMin(myArr));
