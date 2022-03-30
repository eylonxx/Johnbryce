// // let i: number;
// // for (i = 100; i <= 200; i++) {
// //   if (i % 2 === 0) console.log(i);
// // }
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
// // function printText(text: string, times: number) {
// //   for (let i = 1; i <= times; i++) {
// //     console.log(text);
// //   }
// // }
// // printText('hello', 3);
// // function getAverage(n1: number, n2: number): number {
// //   //must have a return
// //   const sum = (n1 + n2) / 2;
// //   //need to declare what a function returns
// //   return sum;
// // }
// // console.log(getAverage(3, 5));
// // //export and import works like react
// const randState = (): string => {
//   const states: string[] = ['America', 'Africa', 'Australia'];
//   return states[Math.floor(Math.random() * states.length)];
// };
// class Parrot {
//   name: string;
//   color: string;
//   breed: string;
//   origin: string;
//   constructor(name: string, color: string, breed: string) {
//     this.name = name;
//     this.color = color;
//     this.breed = breed;
//     this.origin = randState();
//   }
//   display(): void {
//     console.log('my name is' + this.name);
//   }
//   fly(): void {
//     console.log(`${this.name} is flying`);
//   }
// }
// const parrot1 = new Parrot('oded', 'black', 'gay');
// console.log(parrot1);
var Affinity;
(function (Affinity) {
    Affinity[Affinity["NONE"] = 0] = "NONE";
    Affinity[Affinity["SHUAL"] = 1] = "SHUAL";
    Affinity[Affinity["TSLOFAH"] = 2] = "TSLOFAH";
    Affinity[Affinity["ARNAV"] = 3] = "ARNAV";
})(Affinity || (Affinity = {}));
var ShutzMember = /** @class */ (function () {
    function ShutzMember(name, age, joinDate, affinity) {
        this.name = name;
        this.age = age;
        this.joinDate = joinDate ? joinDate : new Date();
        this.affinity = affinity ? affinity : Affinity.NONE;
    }
    ShutzMember.prototype.getAffinityString = function () {
        switch (this.affinity) {
            case Affinity.SHUAL:
                return 'Shual';
            case Affinity.TSLOFAH:
                return 'Tslofah';
            case Affinity.ARNAV:
                return 'Arnav';
            default:
                return 'None';
        }
    };
    ShutzMember.prototype.toString = function () {
        return "Name: ".concat(this.name, ", Age:").concat(this.age, ", Date joined:").concat(this.joinDate.toLocaleTimeString(), ", Affinity: ").concat(this.getAffinityString());
    };
    return ShutzMember;
}());
var Arnav = /** @class */ (function (_super) {
    __extends(Arnav, _super);
    function Arnav(name, age, joinDate) {
        return _super.call(this, name, age, joinDate, Affinity.ARNAV) || this;
    }
    return Arnav;
}(ShutzMember));
var dor = new Arnav('dor', 22, new Date(1998, 1, 1));
console.log(dor.toString());
