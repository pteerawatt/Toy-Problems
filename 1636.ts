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
    let heap = new MinHeap();
    for (let key in frequency) {
        heap.insert(+key, frequency[key]);
    }
    return [1];
  };
  
  class MinHeap {
    heap: number[][];
    constructor() {
      this.heap = [];
    }
    
    insert(num, freq) {
        this.heap.push([num, freq]);
        // child = 2n + 1 or 2n + 2
        let parentIdx = Math.floor((this.heap.length - 1)/2);
        let childIdx = this.heap.length - 1;
        let parent;
        let child;
        while (parentIdx >= 0) {
            parent = this.heap[parentIdx];
            child = this.heap[childIdx];
            if (child[1] < parent[1]) {
                // swap
                this.heap[parentIdx] = child;
                this.heap[childIdx] = parent;
                childIdx = parentIdx;
                parentIdx = Math.floor((childIdx - 1)/2);
            }
            else if (child[1] === parent[1] && child[0] > parent[0]) {
                // swap
                this.heap[parentIdx] = child;
                this.heap[childIdx] = parent;
                childIdx = parentIdx;
                parentIdx = Math.floor((childIdx - 1)/2);
            } else break;
        }
    }
      
    dequeue() {
        
    }
  }
