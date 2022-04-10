// enum PrintFormat {
//   Space = ' ',
//   Pipe = '|',
//   Enter = ' \n ',
// }
// const displayArr = (a: number[], seperator: PrintFormat) => {
//   console.log(a.join(`${seperator}`));
// };
// displayArr([1, 2, 3], PrintFormat.Pipe);
var fnc = function (arr, n) {
    return arr.indexOf(n);
};
console.log(fnc([1, 2, 3], 5));
