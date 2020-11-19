// write a function that searches for a number in a sorted array

let search = (arr: number[], target: number, index: number = 0): number => {
  // pick a middle number
  let mid = Math.floor(arr.length/2);
  // if target is middle, return index
  if (arr[mid] === target) return mid;
  // if arr.length = 1 && arr[0] is not target, return -1
  if (arr.length === 1 && arr[0] !== target) return -1;
  // if target is more than middle, recurse rightside. else recurse leftside
  if (target > arr[mid]) return search(arr.slice(mid + 1), target, mid);
  else return search(arr.slice(0, mid), target, mid);
}

let test = [2, 5, 3, 9];

console.log(search(test, 2))