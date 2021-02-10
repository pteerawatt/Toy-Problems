// happy number
// given a number. in a loop add all the square of digits to get a total. return true if eventually the total is 1, false if you end up in a loop.

// idea: we want to continously loop to find the sum and check if its 1. We need to also check if we will be stuck in an infinate loop. 
// we know that we will be in a loop if we get to the same totoal again. so at each sum we also memo and check if we already have this sum

function isHappy(n: number): boolean {
  // have memo object
  // while not 1
  // loop over the digits to square and add to sum
  // if sum in memo return false, else store in memo

  let memo = {};

  while (n !== 1) {
    let sum = 0;
    while (n > 0) {
      // loop over digits
      let digit = n % 10;
      sum += digit * digit;
      n = (n - digit) / 10;
    }
    if (memo[sum]) return false;
    else memo[sum] = true;
    n = sum;
  }

  return true
};