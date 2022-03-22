// q#1
// const test = () => {
//   try {
//     let final = factorGrade(105);
//     console.log(final);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const factorGrade = (grade) => {
//   const factoredGrade = 10 * Math.sqrt(grade);
//   if (factoredGrade < 0 || factoredGrade > 100) {
//     throw new Error('Invalid grade!');
//   } else return factoredGrade;
// };

// q#2
// 'use strict';
// (function () {
//   const buttn = document.getElementById('myButton');
//   buttn.addEventListener('click', () => {
//     console.log('eylon');
//   });
// })();

//q#3 this

// 'use strict';
// (function () {
//   const buttons = document.querySelectorAll('.buttonsContainer > button');
//   for (let button of buttons) {
//     button.addEventListener('click', function () {
//       alert(this);
//     });
//   }
// })();

//this with arrow, binds wherever u called it.
// מה ששאלתי את עודד לא עבד בגלל שבאיפי אני מתנתק מהווינדאו אובג'קט ולכן יוצר אנדיפיינד
// const button4 = document.getElementById('button4');
// button4.addEventListener('click', function () {
//   setTimeout(() => {
//     console.log(this); //button
//     this.style.backgroundColor = 'green';
//   }, 1000);
// });

// q#4
// 'use strict';
// (function () {
//   const arr = [];

//   for (let i = 0; i < 50; i++) {
//     const n = Math.floor(Math.random() * 100);
//     arr.push(n);
//   }

//   console.log(arr);

//   let chosen = arr.find((num) => num % 2 === 0 && num < 20);
//   console.log(chosen);
// })();

// q#5
// 'use strict';
// (function () {
//   const arr = [];

//   for (let i = 0; i < 50; i++) {
//     const n = Math.floor(Math.random() * 100);
//     arr.push(n);
//   }

//   console.log(arr);

//   let chosen = arr.findIndex((num) => num % 2 !== 0);
//   console.log(chosen);
// })();

//q#6
// (function () {
//   const arr = [];

//   for (let i = 0; i < 50; i++) {
//     const n = Math.floor(Math.random() * 100);
//     arr.push(n);
//   }

//   console.log(arr);

//   let chosen = arr.filter((num) => num % 2 === 0);
//   console.log(chosen);
// })();

//q#7
// (function () {
//   const arr = [];

//   for (let i = 0; i < 50; i++) {
//     const n = Math.floor(Math.random() * 100);
//     arr.push(n);
//   }

//   console.log(arr);

//   let chosen = arr.map((num) => num * num);
//   console.log(chosen);
// })();

//q#8
// (function () {
//   const arr = [];

//   for (let i = 0; i < 50; i++) {
//     const n = Math.floor(Math.random() * 100);
//     arr.push(n);
//   }

//   console.log(arr);

//   let chosen = arr.map((num) => (num % 2 === 0 ? 'even' : 'odd'));

//   console.log(chosen);
// })();

//q#9
(function () {
  const arr = [];

  for (let i = 0; i < 50; i++) {
    const n = Math.floor(Math.random() * 100);
    arr.push(n);
  }

  console.log(arr);

  arr.forEach((num) => num % 2 === 0 && console.log(num));
})();
