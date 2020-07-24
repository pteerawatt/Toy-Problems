//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function(nums) {
  // overall plan is to loop through array and save index. when we find the first number that is unique we put it at the index and increment the inde.
  // if empty return 0
  // have an index = 1
  // current = num[0]
  
  // loop through nums start at index 1
      // if num not equal to current
          // set current to be this num
          // set num @ index to be current
          // increment index
      
  
  //return index
};