import findPrimes from './find-primes';
import { savePrimes, readSavedPrimes } from './save-primes';
const primes = findPrimes(100, 200);
console.log(primes);
savePrimes('xd', primes);
const content = readSavedPrimes('xd');
console.log(content);
