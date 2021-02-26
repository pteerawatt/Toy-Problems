/*
diagonal sort

given a matrix of positive intergers, sort the diagonal rows of numbers.
the rows start from bottom to top, left to right.

3 1 5      3 2 9
2 9 7  =>  1 7 8
7 8 2      5 7 2

idea: write a function that iterate in a diagonal line and sort the numbers in bound. loop from left to right of first row. then loop from top to bottom of the last column to the right
 if out of bounds we dont count

looping process:
top->down: i-- k--
bottom->up: i++ k++
*/

const diagonalsSort = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    diagonalSort(matrix, 0, i);
  }
  for (let i = 1; i < matrix.length; i++) {
    diagonalSort(matrix, i, matrix.length - 1)
  }
  return matrix;
}

const diagonalSort = (matrix, r, c) => {
  while (c >= 0 && r < matrix.length) {
    let temp = matrix[r][c];
    let maxNum = matrix[r][c];
    let maxC = c;
    let maxR = r;
    let r1 = r;
    let c1 = c;
    while (r1 < matrix.length && c1 >= 0) {
      if (matrix[r1][c1] > maxNum) {
        maxNum = matrix[r1][c1];
        maxC = c1;
        maxR = r1;
      }
      r1++;
      c1--;
    }

    matrix[r][c] = maxNum;
    matrix[maxR][maxC] = temp;
    c--;
    r++;
  }
}

let test = [[1, 3, 9, 4],
            [9, 5, 7, 7],
            [3, 6, 9, 7],
            [1, 2, 2, 2]]

console.log(diagonalsSort(test))