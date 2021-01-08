// sort array by increasing frequency

// sort an array by the frequency of an element. the element with the most frequency is last. 
// if there is an element with the same frequency, sort them in decending order

// idea: loop through array and store frequency. (minimum heap)
  // using minimum heap. if the frequency is the same we put the greater value first
// use priority queue to generate a new array according to the frequency.
  // if they are the same sort by decending.

function frequencySort(nums: number[]): number[] {
  let frequency = {};
  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]]) frequency[nums[i]]++
    else frequency[nums[i]] = 1;
  }
  console.log(frequency)
  return [1];
};

class minHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }
}
