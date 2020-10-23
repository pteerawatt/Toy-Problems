// given an array containing 2n elements. return an array that groups the nth elements together.

// example: [2,5,1,3,4,7]
// outpit: [2,3,5,4,1,7]
// Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// idea: the array can be split into two halfs since the total elements is 2n. we can use two pointers to alternate push to the result array.

var shuffle = function(nums, n) {
  let result = [];
  
  for (i = 0, j = nums.length/2; i < nums.length/2, j < nums.length; i++, j++) {
      result.push(nums[i]), result.push(nums[j])
  }
  return result;
};
