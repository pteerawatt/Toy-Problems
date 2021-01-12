// this doc is to test and play around with sort

// sort sorts an array in place, mutating it.
let arr = [5, 1, 3, 2, 4];

arr.sort((a, b) => {
  // console.log(a, b)
  // heres the idex assigned to a and b with each loop
  // [a = 1, b = 0] = (1, 5), [a = 2, b = 1] = (3, 1), [a = 3, b = 2] = (2, 3), ...
  // note that b is the value to the left and a is the value to the right
  
  // when we return negative number, the array gets rearranged.
  // ex if we return negative value, arr is now [4, 2, 3, 1, 5]
  // if we return positive value, arr stays the same. 

  // when we add conditional statement like below we flip the first two elements but the remaning stays the same
  // [5, 1, 3, 2, 4] => [1, 5, 3, 2, 4]
  if (arr.indexOf(a) === 1 && arr.indexOf(b) === 0) return -1
  return +1


  // if we return a - b, we sort in assending order, if b - a we sort in decending order
  // remember: returning negative flips the element
  // so if we return a - b which is (1 - 5), this returns a negative, so [5, 1] becomes [1, 5]
  // if we return b - a which is (5 - 1), this returns positive, so [5, 1] stays [5, 1]
  // in summary, a - b returns sort in assending order because with each iteration if right value is > left value it will return positive, so in this case the array will stay the same. but when left value > right value, we return negative, which swaps the elements.
});
// console.log(arr)

// also works with alphabeth
let arr2 = ['c', 'b', 'a'];
arr2.sort((a, b) => {
  // we can just use sort without an annomous function and it will sort in assending.
  // but we can custom by having a conditional return either positive or negative.
  return a > b ? 1 : -1;
});
// console.log(arr2)




// below we have an array with tuples [alphabet, frequency]
let arr3 = [['b', 2], ['a', 1], ['c', 2]];

// first lets just sort by alphabet, say we dont care about value
arr3.sort((a, b) => {
  return a[0] > b[0] ? 1 : -1;
})
console.log(arr3)

// now lets sort by lowest freq first, if the freq is equal we sort by assending alphabeth
arr3.sort((a, b) => {
  // first we attempt to sort by freq
  if (a[1] > b[1]) return 1;
  else if (a[1] < b[1]) return -1;
  // when freq is equal we sort by alphabeth - decending order
  else if (a[1] === b[1]) return a[0] > b[0] ? -1 : 1;
})
console.log(arr3)


