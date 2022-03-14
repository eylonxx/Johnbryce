const bg = document.querySelector('body');

// 1st exercise
// function cool(paintCallback) {
//   paintCallback();
// }

// cool(() => {
//   const random = () => Math.floor(Math.random() * 256);
//   bg.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
// });

// 2nd exercise
// function nice(paintCallback) {
//   paintCallback('black');
// }

// nice((c) => {
//   bg.style.backgroundColor = `${c}`;
// });

//3rd exercise
// function amazing(paintCallback) {
//   const paintedColor = paintCallback('Red', 'Green', 'Blue');
//   document.write('Painted Color: ' + paintedColor);
// }

// amazing((c1, c2, c3) => {
//   const rand123 = Math.floor(Math.random() * 3 + 1).toString();
//   console.log(`c${rand123}`);
//   bg.style.backgroundColor = eval(`c${rand123}`);
//   return eval(`c${rand123}`);
// });

// 4th exercise
// setInterval(() => {
//   let random = Math.floor(Math.random() * 100 + 1);
//   console.log(random);
// }, 1000);

//5th exercise
// setInterval(() => {
//   const random = () => Math.floor(Math.random() * 256);
//   bg.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
// }, 1000);

//6th exercise
// const populate = () => {
//   let arr = [];
//   const random = () => Math.floor(Math.random() * 100);
//   for (let i = 0; i < 100; i++) {
//     arr.push(random());
//   }
//   console.log(arr);
// };
// setInterval(() => {
//   populate();
// }, 3000);

//2nd page
//1st exercise
// console.log('start');
// setTimeout(() => {
//   console.log(new Date().toLocaleTimeString());
// }, 3000);
// console.log('end');

//2nd exercise
// console.log('start');
// const d = new Date().toLocaleTimeString();
// setTimeout(() => {
//   console.log(d);
// }, 3000);
// console.log('end');

//3rd exercise
// const random = () => Math.floor(Math.random() * 100);
// console.log('start');
// setTimeout(() => {
//   console.log(random());
// }, 3000);
// setTimeout(() => {
//   console.log(random());
// }, 5000);
// setTimeout(() => {
//   console.log(random());
// }, 7000);
// console.log('end');

//4th exercise
// const myp = document.querySelector('#myp');
// const myi = document.querySelector('#myi');

// const getInputValue = () => {
//   return myi.value;
// };
// setInterval(() => {
//   currNum = getInputValue();
//   const random = Math.floor(Math.random() * currNum);
//   myp.innerHTML = random;
// }, 1000);

//5th exercise
// const paint = () => {
//   document.body.style.backgroundColor = 'Green';
//   setTimeout(() => alert('Done'), 0);
// };
