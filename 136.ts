// write a function that takes an array of nums of elements that repeat twice. all but one of the elements only occurs once. return this element

function singleNumber(nums: number[]): number {
  let memo = {};
  for (let e of nums) {
    if (memo[e] || memo[e] === 0) {
      delete memo[e];
    } else {
      memo[e] = e;
    }
  }
  console.log(memo)
  for (let key in memo) {
    return memo[key];
  }
};