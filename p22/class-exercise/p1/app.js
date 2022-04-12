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
  if (b === 0) return;
  return a + multiply(a, b - 1);
}
// console.log(multiply(3, 4));
