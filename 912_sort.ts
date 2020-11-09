// idea: pick one number and put it at its place. recurse the two sides between the number
function sortArray(nums: number[], start = 0, end = nums.length): number[] {
  if (start < end) {
      let mid = pivot(nums, start, end);
  
      sortArray(nums, start, mid);
      sortArray(nums, mid + 1, end);
  }
  
  return nums;
};

let pivot = (nums: number[], start = 0, end = nums.length): number => {
  let index = start;

  for (let i = index + 1; i < end; i++) {
      if (nums[i] < nums[start]) {
          index++;
          [nums[index], nums[i]] = [nums[i], nums[index]];
      }
  }
  [nums[start], nums[index]] = [nums[index], nums[start]];

  return index;
}
