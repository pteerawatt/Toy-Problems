// given an array of int, return the number of good pairs. good pairs are i, j and nums[i] === nums[j] and i < j

// ex: [1,2,3,1,1,3] => 4 good pairs

// use two loops to find equal elements. when we find one we add to the counter.
  // if we set j = i + 1, we never have to worry that i > j
var numIdenticalPairs = function(nums) {
  let counter = 0;
  
  for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) counter++;
      }
  }
  return counter;
};