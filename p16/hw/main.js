//q#1
// const arr = [];

// for (let i = 0; i < 20; i++) {
//   arr.push(Math.floor(Math.random() * 100));
// }
// console.log(arr);
//a
// for (let num of arr) {
//   console.log(num);
// }

// //b
// let chosen = arr.find((num) => {
//   return num % 2 === 0;
// });
// console.log(chosen);

//c
// let chosen = arr.find((num) => num > 50);
// console.log(chosen);

// //d
// let chosen = arr.filter((num) => num % 2 !== 0);
// console.log(chosen);

//e
// let chosen = arr.filter((num) => num > 50);

//f
// let chosen = arr.findIndex((num) => num > 50);

//g
// let chosen = arr.map((num) => {
//   if (num % 2 === 0) return 'even';
//   else return 'odd';
// });

//h
// const min = arr.reduce((a, b) => Math.min(a, b));

// //i
// const max = arr.reduce((a, b) => Math.max(a, b));

//q#2
//a

// let arr = [];
// for (let i = 0; i < 20; i++) {
//   const rand = () => Math.floor(Math.random() * 100 + 1);
//   arr.push({ x: rand(), y: rand() });
// }
// console.log(arr);
//a
// let chosen = arr.map((obj) => console.log(obj.x, obj.y));

//b
// let chosen = arr.find((obj) => obj.x > obj.y);

//c
// let chosen = arr.find((obj) => obj.y > 50);

//d
// let chosen = arr.filter((obj) => obj.x % 2 !== 0);

//e
// let chosen = arr.filter((obj) => obj.y > 50);

//f
// let chosen = arr.findIndex((obj) => obj.x > 50);

//g
// let chosen = arr.map((obj) => {
//   return Math.sqrt(Math.pow(obj.x - 0, 2) + Math.pow(obj.y - 0, 2));
// });

//h
// let chosen = arr.reduce((acc, curr) => Math.min(acc, curr.x), arr[0].x);

//i
// let chosen = arr.reduce((acc, curr) => Math.min(acc, curr.x), arr[0].x);
// let chosenOne = arr.find((obj) => obj.x === chosen);
// console.log(chosenOne);

//q#3
let pizza = [];
for (let i = 0; i < 20; i++) {
  const rand = () => Math.floor(Math.random() * 20 + 1);
  pizza.push({ diameter: rand(), slices: rand(), toppings: rand(), price: rand() });
}
console.log(pizza);
//a
// for (let one of pizza) console.log(one);

//b
// let chosen = pizza.find((p) => p.toppings === 0);

//c
// let chosen = pizza.find((p) => p.price < 30);

//d
// let chosen = pizza.filter((p) => p.diameter < 20);

//e
// let chosen = pizza.filter((p) => p.price > 80);

//f
// let chosen = pizza.filter((p) => p.toppings === 0);

//g
// let chosen = pizza.findIndex((p) => p.slices === 6);

//h
// let chosen = pizza.map((p) => console.log(p.diameter / 2));

//i
let chosen = pizza.map((p) => (p.vat = p.price * 1.17));
console.log(chosen);
