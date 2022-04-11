import ArrayOperations from './ArrayOperations';

const getRandomNumber = () => {
  return Math.floor(Math.random() * 20);
};

let myArr: number[] = [];
for (let i = 0; i < 10; i++) {
  myArr.push(getRandomNumber());
}
console.log(myArr);

console.log(ArrayOperations.getSum(myArr));
console.log(ArrayOperations.getAvg(myArr));
console.log(ArrayOperations.getMax(myArr));
console.log(ArrayOperations.getMin(myArr));
