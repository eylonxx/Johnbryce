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
const getRandomBrightColorAfterDelayTEST = () => {
  getRandomBrightColorAfterDelay(
    (selectedColor) => {
      document.body.style.backgroundColor = selectedColor;
    },
    (err) => {
      alert('not a bright color!!');
    }
  );
};

const getRandomBrightColorAfterDelay = (succCallback, errCallback) => {
  setTimeout(() => {
    const colors = ['Yellow', 'Black', 'LightBlue', 'Brown', 'LightGreen', 'DarkMagenta'];
    const num = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[num];
    if (selectedColor === 'LightBlue' || selectedColor === 'Yellow' || selectedColor === 'LightGreen') {
      succCallback(selectedColor);
    } else {
      errCallback();
    }
  }, 3000);
};
