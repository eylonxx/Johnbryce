const findPrimes = (min: number, max: number): number[] => {
  const primeNumbers = [];
  for (let i = min; i <= max; i++) {
    let prime = i > 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      primeNumbers.push(i);
    } else {
    }
  }
  return primeNumbers;
};

export default findPrimes;
