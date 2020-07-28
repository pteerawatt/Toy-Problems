// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

//The order of elements can be changed. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // iterate through the array. keep keep track of index. when i find a value i put it in the queue for so i can replace a non val
   
   // create index tracker
   // create obj to store dub
   // ccreate key tracker to store index of duplicate
   // create queue tracker
   
   // iterate through the array
       // if not equal val
           // if there is a queue
               // change number at the queue to this number
               // iterate the queue
           // increment index tracker
       // else its equal val
           // we store the index of this val in queue
           
   
   // set array length = index to slice off the rest
   // return index tracker
};