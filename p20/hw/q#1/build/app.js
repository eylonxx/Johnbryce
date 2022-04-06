"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Guitar_1 = __importDefault(require("./Guitar"));
var Drums_1 = __importDefault(require("./Drums"));
var Piano_1 = __importDefault(require("./Piano"));
var GrandPiano_1 = __importDefault(require("./GrandPiano"));
var myGuitar = new Guitar_1.default('J200', 'Gibson', 'Orange', 6);
var myDrums = new Drums_1.default('FP-10', 'Roland', 'White', 60);
var myPiano = new Piano_1.default('K-21', 'Steinway', 'Black', 88);
var myGrandPiano = new GrandPiano_1.default('Model-D', 'Steinway', 'Black', 88, 170);
var randNum = Math.floor(Math.random() * 4 + 1);
var choice;
switch (randNum) {
    case 1:
        choice = myGuitar;
        break;
    case 2:
        choice = myDrums;
        break;
    case 3:
        choice = myPiano;
        break;
    case 4:
        choice = myGrandPiano;
        break;
    default:
        console.log('bug');
}
choice.display();
if (choice instanceof Piano_1.default || choice instanceof GrandPiano_1.default) {
    console.log(choice.keysNum);
}
