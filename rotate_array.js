// Given an array, rotate the array to the right by k steps, where k is non-negative.

// BRUTE FORCE
var rotate = function(nums, k) {
  // loop through array starting from the index that is (length - k)
  // push index to new array
  // loop through array again till its before (length - k)
  // return array
};


// O1 solution attempt
    // this one does not work because it doesnt take into account when k is greater than the nums length and you have to shift more than one round
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
      // iterate from beginning to end
      let queue = 0;
      let firstOnQueue = 0;
      let startIndex = nums.length - k;
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
