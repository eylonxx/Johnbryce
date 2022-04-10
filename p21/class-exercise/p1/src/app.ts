class ArrayOperations {
  public static getSummary = (a: number[]) => {
    return a.reduce((a, b) => a + b, 0);
  };
  public static getAverage = (a: number[]) => {
    return a.reduce((a, b) => a + b, 0) / a.length;
  };
}

console.log(ArrayOperations.getAverage([3, 6, 3]));
console.log(ArrayOperations.getSummary([3, 6, 3]));
