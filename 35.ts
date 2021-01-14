// search insert position

// given an array soted in ascending order and a target number. return the index of the target number. if the target does not exist, return the index that the target would be in.

// idea: use binary search to find index. if the number doesnt exist: once we narrow it down to left and right number (2 numbers left) if target is less than left, return left index, otherwise return right index.

var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
      mid = Math.floor((right + left)/2);
      if (nums[mid] === target) return mid;
      if (target < nums[mid]) right = mid - 1;
      if (target > nums[mid]) left = mid + 1;
  }
  return nums[mid] > target ? mid : mid + 1;
};
