function printNto1(n) {
  if (n < 1) return;

  console.log(n);

  printNto1(n - 1);
}
// printNto1(4);

function printEto1(n) {
  if (n < 1) return;
  if (n % 2 === 0) console.log(n);
  printEto1(n - 1);
}
// printEto1(10);

function multiply(a, b) {
  if (b === 1) return a;
  return a + multiply(a, b - 1);
}
// console.log(multiply(3, 4));

function factorial(a) {
  if (a === 1) return a;
  return a * factorial(a - 1);
}
// console.log(factorial(4));

function recFunc(arr, min, max) {
  let a = arr[min];
  if (min === max) return a;

  return a + recFunc(arr, min + 1, max);
}
// console.log(recFunc([1, 2, 3, 4, 5, 6], 0, 3));

function recFuncMax(arr, min, max) {
  if (max === min) return arr[max];
  let maxNum = arr[min];
  if (maxNum < arr[max]) maxNum = arr[max];
  let num = recFuncMax(arr, min, max - 1);
  return maxNum < num ? num : maxNum;
}
// console.log(recFuncMax([1, 12, 3, 4, 5, 6], 0, 3));

function print1toN(n) {
  if (n !== 1) print1toN(n - 1);
  console.log(n);
}
// print1toN(3);

function fibonacci(n) {
  if (n < 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(9));

function binarySearch(arr, value) {}
