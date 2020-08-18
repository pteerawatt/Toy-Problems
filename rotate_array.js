// Given an array, rotate the array to the right by k steps, where k is non-negative.

// BRUTE FORCE
var rotate = function(nums, k) {
  // loop through array starting from the index that is (length - k)
  // push index to new array
  // loop through array again till its before (length - k)
  // return array
};


// O1 solution
// iterate from beginning to end
// so change the beginning number to the array[i + (length - k)]
    // store replaced number into map obj
    // if index is no longer valed (its greate than total length)
      // read from map obj
    // else change the element to the one at array[i + (length -k)]