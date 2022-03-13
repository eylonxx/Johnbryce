const bg = document.querySelector('body');

function paintPage() {
  bg.style.backgroundColor = 'red';
}

function operate(f) {
  f();
}

function doIt() {
  operate(paintPage);
}
