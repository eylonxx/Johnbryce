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

//promises

// question #1
// const generate7BoomAfterDelayAsync = (min, max) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       randomNum = Math.floor(Math.random() * (max - min) + min);
//       if (randomNum % 7 === 0 || randomNum % 10 === 7) {
//         resolve(randomNum);
//       } else {
//         reject(randomNum);
//       }
//     }, 1000);
//   });
// };

// const test = () => {
//   generate7BoomAfterDelayAsync(27, 30)
//     .then((randomNum) => {
//       console.log('success', randomNum);
//     })
//     .catch((randomNum) => {
//       console.log('failed', randomNum);
//     });
// };

//question #2
// const isPrime = (num) => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
//   return true;
// };

// const generatePrimeNumberAfterDelayAsync = (min, max) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNum = Math.floor(Math.random() * (max - min) + min);
//       if (isPrime(randomNum)) {
//         resolve(randomNum);
//       } else {
//         reject(randomNum);
//       }
//     }, 1000);
//   });
// };

// const test = () => {
//   generatePrimeNumberAfterDelayAsync(0, 100)
//     .then((randomNum) => {
//       console.log('yay', randomNum);
//     })
//     .catch((randomNum) => {
//       console.log('oh no', randomNum);
//     });
// };

//question #3

// const generateCuteAnimalAfterDelayAsync = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const animals = ['Kitty', 'Puppy', 'Bunny', 'Budgie', 'Scorpion', 'Spider', 'Cockroach'];
//       randomAnimal = animals[Math.floor(Math.random() * animals.length)];
//       if (
//         randomAnimal === 'Kitty' ||
//         randomAnimal === 'Puppy' ||
//         randomAnimal === 'Bunny' ||
//         randomAnimal === 'Budgie'
//       ) {
//         resolve(randomAnimal);
//       } else reject(randomAnimal);
//     }, 1000);
//   });
// };
// const test = () => {
//   generateCuteAnimalAfterDelayAsync()
//     .then((randomAnimal) => console.log('cute', randomAnimal))
//     .catch((randomAnimal) => console.log('ugly', randomAnimal));
// };

//question #4
// const generateWorkingDayAfterDelayAsync = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//       const chosenDay = weekDays[Math.floor(Math.random() * weekDays.length)];
//       if (weekDays.slice(0, 5).includes(chosenDay)) {
//         resolve(chosenDay);
//       } else reject(chosenDay);
//     }, 1000);
//   });
// };

// const test = () => {
//   generateWorkingDayAfterDelayAsync()
//     .then((day) => {
//       console.log('lets go to work!', day);
//     })
//     .catch((day) => {
//       console.log('work onth e weekened odededqf', day);
//     });
// };

//question #5
// const getArrayFromServerAsync = (size) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNum = Math.floor(Math.random() * 10);
//       if (randomNum % 2 === 0) {
//         resolve(
//           Array(size)
//             .fill()
//             .map(() => Math.floor(Math.random() * 50))
//         );
//       } else {
//         reject();
//       }
//     }, 1000);
//   });
// };

// const test = () => {
//   getArrayFromServerAsync(20)
//     .then((arr) => {
//       console.log(arr);
//     })
//     .catch(() => {
//       console.log('cant do that');
//     });
// };

//question #6
// const getPizzaFromServerAsync = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       randomNum = Math.floor(Math.random() * 40 + 10);

//       if (randomNum % 2 === 0) {
//         const pizza = {
//           diameter: randomNum,
//           price: randomNum,
//           toppings: randomNum,
//         };
//         resolve(pizza);
//       } else {
//         reject();
//       }
//     }, 1000);
//   });
// };

// const test = () => {
//   getPizzaFromServerAsync()
//     .then((pizza) => console.log(pizza))
//     .catch(() => console.log('oh no'));
// };

//question #7
// const generateStrongPasswordAsync = () => {
//   return new Promise((resolve, reject) => {
//     const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let newPass = '';
//     for (let i = 0; i <= 5; i++) {
//       let randomNum = Math.floor(Math.random() * chars.length);
//       newPass += chars[randomNum];
//     }
//     if (
//       newPass.split('').some((letter) => letter <= 'z' && letter >= 'a') &&
//       newPass.split('').some((letter) => letter <= 'Z' && letter >= 'A') &&
//       newPass.split('').some((letter) => letter <= '9' && letter >= '0')
//     ) {
//       resolve(newPass);
//     } else reject(newPass);
//   });
// };

// const test = () => {
//   generateStrongPasswordAsync()
//     .then((pass) => console.log('yay', pass))
//     .catch((pass) => console.log('oh no', pass));
// };
