// write a function that searches for a number in a sorted array

function search(arr: number[], target: number, left: number = 0, right: number = arr.length - 1): number | undefined{
  let mid = Math.floor((left + right)/2);
  if (arr[mid] === target) return mid;
  if (left >= right) return -1
  // if target is more than middle, recurse rightside. else recurse leftside
  if (target > arr[mid]) return search(arr, target, mid + 1, right);
  if (target < arr[mid]) return search(arr, target, left, mid - 1);
};

let test = [2, 5, 3, 9];

console.log(search(test, 2))