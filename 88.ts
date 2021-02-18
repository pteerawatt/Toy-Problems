// merge sorted array


/**
 Do not return anything, modify nums1 in-place instead.
 */
// nums1 has room to add nums2. so we will be shifting in-place

// idea: nums1 has a bunch of empty spaces in the back. we should fill those spaces first and iterate down from the leftside
// compre the last values of the array using n and m
// whichever one is more we would put that value there first
// iterate down

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  m--;
  n--;
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (n >= 0 && m >= 0) {
      nums1[i] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    }
    else if (m < 0) {
      nums1[i] = nums2[n--]
    } else if (n < 0) break;
  }
};