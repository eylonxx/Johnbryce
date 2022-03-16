//question #8

// const test = () => {
//   getRandomNumberAfterDelay((num) => {
//     console.log(num);
//   });
// };

// const getRandomNumberAfterDelay = (callback) => {
//   setTimeout(() => {
//     randomNum = Math.floor(Math.random() * 100);
//     callback(randomNum);
//   }, 5000);
// };

//question #9

// const test = () => {
//   getRandomNumberAfterDelay((num) => {
//     console.log(num);
//   }, 30);
// };

// const getRandomNumberAfterDelay = (callback, limit) => {
//   setTimeout(() => {
//     randomNumLimit = Math.floor(Math.random() * limit);
//     callback(randomNumLimit);
//   }, 1000);
// };

// question #10
// const test = () => {
//   getRandomNumberAfterDelay(
//     (num) => {
//       console.log(num);
//     },
//     20,
//     30
//   );
// };
// const getRandomNumberAfterDelay = (callback, min, max) => {
//   setTimeout(() => {
//     randomNumLimit = Math.floor(Math.random() * (max - min + 1) + min);
//     callback(randomNumLimit);
//   }, 1000);
// };

// question #11
// const test = () => {
//   getEvenRandomNumberAfterDelay(
//     (num) => {
//       console.log(num);
//     },
//     20,
//     30
//   );
// };
// const getEvenRandomNumberAfterDelay = (callback, min, max) => {
//   setTimeout(() => {
//     randomEvenNum = Math.floor(Math.random() * (max - min + 1) + min);
//     if (randomEvenNum % 2 === 0) {
//       callback(randomEvenNum);
//     } else callback(randomEvenNum + 1);
//   }, 1000);
// };

//question #12
// function getUserFromServer(callback) {
//   setTimeout(() => {
//     const user = { firstName: 'Moishe', lastName: 'Ufnik' };
//     callback(user);
//   }, 4000);
// }

// const test = () => {
//   getUserFromServer((user) => {
//     console.log(user);
//   });
// };

//question #13
// function getGradesFromServer(callback) {
//   setTimeout(() => {
//     // Demo for getting grades from the server:
//     const grades = [100, 98, 75, 80, 100, 87];
//     // "Return" that array to the calling code.
//     callback(grades);
//   }, 7000);
// }

// const test = () => {
//   getGradesFromServer((grades) => {
//     console.log(grades);
//   });
// };

//question #14
// const getLocation = () => {
//   navigator.geolocation.getCurrentPosition(
//     (succ) => {
//       document.write(`<span>${succ.coords.longitude}, ${succ.coords.latitude}</span>`);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
// };

//question #15
// setInterval(() => {
//   const getTime = () => {
//     return new Date().toLocaleTimeString();
//   };
//   const newColor = () => {
//     randomColor = Math.floor(Math.random() * 256);
//     return randomColor;
//   };

//   myp.innerHTML = `<span style="color: rgb(${newColor()}, ${newColor()}, ${newColor()})">${getTime()}</span>`;
// }, 1000);
