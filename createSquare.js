/*
 Create Square

 given n, create a square size = n -- where the borders are * and empty on the inside.

*/

const createSquare = (n) => {
      let matrix = new Array(n).fill(' ');
      return matrix.map((e, i) => {
          if (i === 0 || i === n - 1) return new Array(n).fill('*');
          else {
              let midRow = new Array(n).fill(' ', 0);
              midRow[0] = '*';
              midRow[n - 1] = '*';
              return midRow;
          }
      })
}

// this solution is less clean but saves us iterating twice
const createSquare = (n) => {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) matrix.push(new Array(n).fill('*'));
    else {
      let midRow = new Array(n).fill(' ', 0);
      midRow[0] = '*';
      midRow[n - 1] = '*';
      matrix.push(midRow)
    }
  }
  return matrix;
}