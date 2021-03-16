/*
Rotate Array

given an array, shift the array to the right by k steps. Do this in O(1) space

idea: since this is O(1) space, we cannot create a new array
  we can splice the right half of the array (at kth element from the right), and then place it in the front
*/

var rotate = function(nums, k) {
  let i = k % nums.length
  let right = nums.splice(nums.length - k);
  nums.splice(0,0, ...right)
};
