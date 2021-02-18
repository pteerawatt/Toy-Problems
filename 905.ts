// sort array by parity

// given an array, sort the array so that it starts with odd numbers and then followed by even at the end.

/*
I: an array of int
O: array with evens follow by odds

[3,1,2,4] => [2,4,3,1] or [4,2,3,1], [2,4,1,3], and [4,2,1,3]
        
*/
// idea: we have two pointers left and right
// if left is even and right is odd -- skip
// if left is odd and right is even -- swap
// if left is even and right is even -- move left
// if left is odd and right is odd -- move right
function sortArrayByParity(A: number[]): number[] {
  let left = 0;
  let right = A.length - 1;

  while (left < right) {
    let lE = A[left] % 2 === 0;
    let rE = A[right] % 2 === 1;
    if (lE && rE) {
      right--;
      left++;
    } else if (!lE && !rE) {
      [A[left], A[right]] = [A[right], A[left]];
      right--;
      left++;
    } else if (lE && !rE) left++;
    else if (!lE && rE) right--;
  }
  return A;
};