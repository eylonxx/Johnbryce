const palindromeRecFunc = (palindrome) => {
  if (palindrome.slice(0, 1) === palindrome.slice(-1)) {
    if (palindrome.length <= 2) return true;
    return palindromeRecFunc(palindrome.slice(1, -1));
  }
  return false;
};

// A M A Z I N G
// A B C C B A
// A B C B A
// console.log(palindromeRecFunc('A'));
