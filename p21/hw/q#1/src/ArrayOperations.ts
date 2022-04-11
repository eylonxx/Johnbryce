class ArrayOperations {
  public static getSum(arr: number[]) {
    return arr.reduce((prev, curr) => prev + curr, 0);
  }
  public static getAvg(arr: number[]) {
    return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
  }
  public static getMax(arr: number[]) {
    return Math.max(...arr);
  }
  public static getMin(arr: number[]) {
    return Math.min(...arr);
  }
}
export default ArrayOperations;
