// search in rotated sorted array

// given a sorted array that has been shifted. Find the index of a given target.

// the idea use binary search.
// determine when do we want to look left
// if rightside is sorted AND target is OUT of range between mid to right
// target < mid or right < target
// if leftside is sorted AND target is IN range from left to mid
// left < target < mid

function search(nums: number[], target: number): number {
  // check of target can possibly be on the left or the right
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor(nums.length / 2);

  while (left <= right) {
    if (nums[mid] === target) return mid;
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    if ((nums[mid] < nums[right] && (target < nums[mid] || target > nums[right])) || (nums[mid] > nums[left] && (nums[mid] > target && target > nums[left]))) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    } else {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
  }

  return -1;
};