const bg = document.querySelector('body');

// 1st exercise
function paintPage() {
  bg.style.backgroundColor = 'red';
}

function operate(f) {
  f();
}

function doIt() {
  operate(paintPage);
}
// 2nd exercise

function justDoIt(f) {
  f();
}

function amazing() {
  justDoIt(function () {
    alert('amazing!');
  });
}

// 3rd exercise
const myp = document.getElementById('myp');
function display() {
  displayMessage(function () {
    myp.innerHTML = 'hi im eylon';
  });
}

function displayMessage(callback) {
  callback();
}

// 4th exercise when recieved as a param

function doWork(callback) {
  callback(10, 'Hi');
}

const myFunc = (num, string) => {
  for (let i = 0; i < num; i++) {
    console.log(string);
  }
};

// 5th exercise when using doWork1 inside a func

function doWork1(callback) {
  const avg = callback(10, 20, 33);
  alert('Average: ' + avg);
}

const myFunc1v2 = () => {
  doWork1((num1, num2, num3) => {
    return (num1 + num2 + num3) / 3;
  });
};
