// given an arr, return the saverage of the elements without the smallest and largest value that has an index that is 5%

// idea: loop over the array and find the sum. meanwhile we keep track of 5% index and the min/max value. return average.

function trimMean1(arr: number[]): number {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (i === 20) console.log('here')
    sum += arr[i];
    if (i % 5 === 0) {
      min = Math.min(min, arr[i]);
      max = Math.max(max, arr[i]);
    }
  }
  return (sum - min - max) / (arr.length - 2);
};

