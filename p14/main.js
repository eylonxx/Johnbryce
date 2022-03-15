//1st exercise
// let colors = ['black', 'green', 'red', 'blue', 'pink'];

// function getRandomColorAfter5SecDelay(callback) {
//   setTimeout(() => {
//     const randomNum = Math.floor(Math.random() * 5);
//     callback(randomNum);
//   }, 2000);
// }
// const paintMeAfterDelay = () => {
//   getRandomColorAfter5SecDelay((color) => {
//     document.body.style.backgroundColor = colors[color];
//   });
// };

//2nd exercise
// const getRandomBrightColorAfterDelayTEST = () => {
//   getRandomBrightColorAfterDelay(
//     (selectedColor) => {
//       document.body.style.backgroundColor = selectedColor;
//     },
//     (err) => {
//       alert('not a bright color!!');
//     }
//   );
// };

// const getRandomBrightColorAfterDelay = (succCallback, errCallback) => {
//   setTimeout(() => {
//     const colors = ['Yellow', 'Black', 'LightBlue', 'Brown', 'LightGreen', 'DarkMagenta'];
//     const num = Math.floor(Math.random() * colors.length);
//     const selectedColor = colors[num];
//     if (selectedColor === 'LightBlue' || selectedColor === 'Yellow' || selectedColor === 'LightGreen') {
//       succCallback(selectedColor);
//     } else {
//       errCallback();
//     }
//   }, 3000);
// };

// function getCat() {
//   const cat = {
//     name: 'mitsi',
//     age: 4,
//   };
// }

// console.log(getCat().name);

// //3rd exercise - promises
// const getRandomBrightColorAfterDelayTEST = () => {
//   getRandomBrightColorAfterDelay()
//     .then((selectedColor) => {
//       document.body.style.backgroundColor = selectedColor;
//     })
//     .catch((err) => {
//       alert('not a bright color!!');
//     });
// };

// const getRandomBrightColorAfterDelay = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const colors = ['Yellow', 'Black', 'LightBlue', 'Brown', 'LightGreen', 'DarkMagenta'];
//       const num = Math.floor(Math.random() * colors.length);
//       const selectedColor = colors[num];
//       if (selectedColor === 'LightBlue' || selectedColor === 'Yellow' || selectedColor === 'LightGreen') {
//         resolve(selectedColor);
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
// };

//4th exercise

const randomDiscount = () => {
  const min = +prompt('enter the minimum number: ');
  const max = +prompt('enter the maximum number: ');
  getRandomSmallDiscountAfterDelay(min, max)
    .then((randomPrice) => {
      console.log('nice!', randomPrice);
    })
    .catch((randomPrice) => {
      console.log('oh no!', randomPrice);
    });
};

const getRandomSmallDiscountAfterDelay = (min, max) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomPrice = Math.floor(Math.random() * (max - min + 1) + min);
      randomAverage = (max + min) / 2;
      if (randomPrice > randomAverage) {
        resolve(randomPrice);
      } else {
        reject(randomPrice);
      }
    }, 3000);
  });
};
