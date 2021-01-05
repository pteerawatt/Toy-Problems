// smallest range I

// given array A. for each element A[i], you can pick and add a number x to it. x is -K <= x <= K. 
// after that the array is now B. return the smallest possible difference between min and max value.

// idea: find the min and max value.
// add max x value to min.
// subtrack the most value to max but dont let it past min
// return max - min

function smallestRangeI(A: number[], K: number): number {
  let min = Infinity;
  let max = -Infinity;
  
  for (let e of A) {
      min = Math.min(min, e);
      max = Math.max(max, e);
  }
  min += K;
  max -= K;
  
  if ((max - min) < 0) return 0;
  else return max - min;
};

// cleaner solution and slightly faster
function smallestRangeIShorter(A: number[], K: number): number {
  let min = Math.min(...A) + K;
  let max = Math.max(...A) - K;
  return (max - min) > 0 ? max - min : 0;
};
