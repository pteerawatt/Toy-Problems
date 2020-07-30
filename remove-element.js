// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

//The order of elements can be changed. It doesn't matter what you leave beyond the new length.

var removeElement = function(nums, val) {
  // iterate through the array. keep keep track of index. when i find a value i put it in the queue for so i can replace a non val
   
   // create length tracker
   let length = 0;
   // create obj to store dub
   // ccreate key tracker to store index of duplicate
   // create queue tracker
   let queue = new MyQueue();
   
   // iterate through the array
   for (let i = 0; i < nums.length; i++) {
       // if not equal val
       if (nums[i] !== val) {
           // if there is a queue
           if (queue.length > 0) {
               // get the index at duplicate value
               let index = queue.dequeue();
               // set this value to the value at duplicated index
               nums[index] = nums[i];
               // mark this index as well 
               queue.add(i)
           }
           // increment length tracker
           length++;
       }  
       // else its equal val
       else {
           // we store the index of this val in queue
           queue.add(i);
       }
           
   }
       
           
   
   // set array length = index to slice off the rest
   // nums.length = length;
   console.log(nums)
   // return length tracker
   return length;
};

class MyQueue {
   constructor() {
   this.first = 0
   this.key = 0
   this.length = 0
   this.storage = {}
   };
   
   add(val) {
       this.storage[this.key] = val;
       this.key++;
       this.length++;
   };
   dequeue() {
       if (this.length > 0) {
           let temp = this.storage[this.first];
           delete this.storage[this.first];
           this.first++;
           this.length--;
           return temp
       }
   };
   length() {
       return this.length;
   }
}

queue = new MyQueue()
queue.add(2)
queue.add(3)
console.log(queue.dequeue())
