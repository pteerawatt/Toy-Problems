// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// example: nums = [1, 2, 3, 4]
// output: [1, 3, 6, 10]

var runningSum = function(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    // add sum to current element
    arr.push(nums[i] + (arr[i - 1] || 0))
  }
  return arr;
};

// the above way works but this uses reduce to make things 1 line.
var runningSum = function(nums) {
  return nums.reduce((acc, curr, index) => [...acc, curr + (acc[index -1] || 0)], [])
};