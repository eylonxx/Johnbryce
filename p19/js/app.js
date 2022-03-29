// let i: number;
// for (i = 100; i <= 200; i++) {
//   if (i % 2 === 0) console.log(i);
// }
// function printText(text: string, times: number) {
//   for (let i = 1; i <= times; i++) {
//     console.log(text);
//   }
// }
// printText('hello', 3);
// function getAverage(n1: number, n2: number): number {
//   //must have a return
//   const sum = (n1 + n2) / 2;
//   //need to declare what a function returns
//   return sum;
// }
// console.log(getAverage(3, 5));
// //export and import works like react
var randState = function () {
    var states = ['America', 'Africa', 'Australia'];
    return states[Math.floor(Math.random() * states.length)];
};
var Parrot = /** @class */ (function () {
    function Parrot(name, color, breed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
        this.origin = randState();
    }
    Parrot.prototype.display = function () {
        console.log('my name is' + this.name);
    };
    Parrot.prototype.fly = function () {
        console.log("".concat(this.name, " is flying"));
    };
    return Parrot;
}());
var parrot1 = new Parrot('oded', 'black', 'gay');
console.log(parrot1);
