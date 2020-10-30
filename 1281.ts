// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

const subtractProductAndSum = (n: number): number => {
  let numsArr = (n.toString()).split('');
  let product = 1;
  let sum = 0;
  for (let e of numsArr) {
      product *= +e;
      sum += +e;
  }
  return product - sum;
}