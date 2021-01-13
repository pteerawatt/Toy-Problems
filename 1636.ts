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
  let resultArr: number[] = [];
  while (heap.heap.length) {
    // dequeue and add to collection
    let dequeued = heap.dequeue();
    for (let i = dequeued[1]; i > 0; i--) resultArr.push(dequeued[0]);

  }
  return resultArr;
};

class MinHeap {
  heap: number[][];
  constructor() {
    this.heap = [];
  }

  insert(num, freq) {
    this.heap.push([num, freq]);
    let parentIdx = Math.floor((this.heap.length - 1) / 2);
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
        parentIdx = Math.floor((childIdx - 1) / 2);
      }
      else if (child[1] === parent[1] && child[0] > parent[0]) {
        // swap
        this.heap[parentIdx] = child;
        this.heap[childIdx] = parent;
        childIdx = parentIdx;
        parentIdx = Math.floor((childIdx - 1) / 2);
      } else break;
    }
  }

  dequeue() {
    let output = this.heap[0];
    let lastVal = this.heap.pop()
    if (this.heap.length > 0) this.heap[0] = lastVal;

    let parentIdx = 0;
    let leftChildIdx = 2 * parentIdx + 1;
    let rightChildIdx = 2 * parentIdx + 2;
    let parent;
    let leftChild;
    let rightChild;
    while (true) {
      parent = this.heap[parentIdx];
      let swap = null;
      if (leftChildIdx < this.heap.length) {
        leftChild = this.heap[leftChildIdx];
        if (parent[1] > leftChild[1]) {
          swap = leftChildIdx;
        }
        if (parent[1] === leftChild[1] && parent[0] < leftChild[0]) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.heap.length) {
        rightChild = this.heap[rightChildIdx];
        if ((swap === null && parent[1] > rightChild[1]) || (swap !== null && rightChild[1] < leftChild[1])) {
          swap = rightChildIdx;
        }
        if ((swap === null && parent[1] === rightChild[1] && parent[0] < rightChild[0]) || (swap !== null && rightChild[1] === leftChild[1] && rightChild[0] > leftChild[0])) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break

      [this.heap[parentIdx], this.heap[swap]] = [this.heap[swap], this.heap[parentIdx]];
      parentIdx = swap;
      leftChildIdx = 2 * parentIdx + 1;
      rightChildIdx = 2 * parentIdx + 2;

    }


    // console.log(this.heap);
    return output;
  }
}

// not exactly sure why the above method isnt working 100% of the time but I believe there is a bug in the swapping the right child. In most examples the test are still passing.


// below we use memo and then JS sort.

function frequencySortJS(nums: number[]): number[] {
  let frequency = {};
  for (let i = 0; i < nums.length; i++) frequency[nums[i]] = (frequency[nums[i]] || 0) + 1;
  
  let freqArr = [];
  for (let key in frequency) freqArr.push([+key, frequency[key]]);
  
  freqArr.sort((a, b) => {
      if (a[1] === b[1]) return a[0] < b[0] ? 1 : -1;
      else if (a[1] > b[1]) return 1;
      else return -1;
  })

  let result = [];
  for (let i = 0; i < freqArr.length; i++) {
      for (let j = freqArr[i][1]; j > 0; j--) {
          result.push(freqArr[i][0]);
      }
  }

  return result;
};