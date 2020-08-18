// Given an array, rotate the array to the right by k steps, where k is non-negative.

// BRUTE FORCE
var rotate = function(nums, k) {
  // loop through array starting from the index that is (length - k)
  // push index to new array
  // loop through array again till its before (length - k)
  // return array
};


// O1 solution attempt
// iterate from beginning to end
// so change the beginning number to the array[i + (length - k)]
    // store replaced number into map obj
    // if index is no longer valed (its greate than total length)
      // read from map obj
    // else change the element to the one at array[i + (length -k)]
    var rotate = function(nums, k) {
      // so change the beginning number to the array[i + (length - k)]
      // store replaced number into map obj
      // if index is no longer valed (its greate than total length)
        // read from map obj
      // else change the element to the one at array[i + (length -k)]
      let storage = {}
      let queue = 0;
      let firstOnQueue = 0;

      // if k > nums.length we find only the shifts we need
      k = k % nums.length;
      let startIndex = nums.length - k;

      // iterate over nums
      for (let i = 0; i < nums.length; i++) {
          if (i + startIndex >= nums.length) {
              // index does not exist, we read from Map
              // store number in Map
              storage[queue] = nums[i];
              queue++;
              // replace the element with dequeue
              nums[i] = storage[firstOnQueue];
              firstOnQueue++;
          } else {
              // store number in Map
              storage[queue] = nums[i]
              queue++;
              // change the number
              nums[i] = nums[i + startIndex];
          }
      }
      return nums;
    };

// another solution is to rotate the whole array, then rotate the first half and rotate the second half. the halfs of the array are divided by at index k - length