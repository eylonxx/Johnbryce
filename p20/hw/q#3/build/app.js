"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Square_1 = __importDefault(require("./Square"));
var Rectangle_1 = __importDefault(require("./Rectangle"));
var Circle_1 = __importDefault(require("./Circle"));
var ribua = new Square_1.default('black', 5);
// ribua.display();
var malben = new Rectangle_1.default('green', 5, 10);
// malben.display();
var igul = new Circle_1.default('yellow', 4);
// igul.display();
var choice;
var rand = Math.floor(Math.random() * 3 + 1);
switch (rand) {
    case 1:
        choice = ribua;
        break;
    case 2:
        choice = malben;
        break;
    case 3:
        choice = igul;
        break;
    default:
        console.log('haha');
        break;
}
// choice.display();
var arr = [];
var randInfo = function () {
    return Math.floor(Math.random() * 20);
};
for (var i = 0; i < 20; i++) {
    var rand_1 = Math.floor(Math.random() * 3 + 1);
    var chosenShape = void 0;
    if (rand_1 === 1)
        chosenShape = new Square_1.default('orange', randInfo());
    if (rand_1 === 2)
        chosenShape = new Rectangle_1.default('orange', randInfo(), randInfo());
    if (rand_1 === 3)
        chosenShape = new Circle_1.default('orange', randInfo());
    arr.push(chosenShape);
}
arr.forEach(function (shape) { return shape.display(); });
