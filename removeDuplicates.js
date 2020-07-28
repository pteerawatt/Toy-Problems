//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function(nums) {
  // overall plan is to loop through array and save index. when we find the first number that is unique we put it at the index and increment the inde.
  // empty = true
  let empty = true;
  // have an index = 1
  let index = 1;
  // current = num[0]
  let curr = nums[0];
  
  // loop through nums start at index 1
  for (let i = 0; i < nums.length; i++) {
      // set empty = false
      empty = false;
      // if num not equal to current
      if (nums[i] != curr) {
          // set current to be this num
          curr = nums[i];
          // set num @ index to be current
          nums[index] = curr;
          // increment index
          index++;
      }
  }
  nums.length = index;
  //if not empty return index else return 0
  empty ? 0 : index;
};