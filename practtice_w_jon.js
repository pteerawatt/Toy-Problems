/*

i: matrix, s, e
o: shortest path

1111
1001
1111
*/

//   0,0
// 1,0  0,1
// 2, 0   0, 2

let shortestCellPath = (matrix, sr, sc, tr, tc) => {
  // use queue ass we move down the layers
  // add all possible way to the queue
  // dequeue

  let queue = [];
  queue.push[sr, sc, 0];
  while (queue) {
    let [r, c, s] = queue.shift()
    if (r === tr && c === tc) return s
    // check if its our target
    if (matrix[r - 1][c] === 1) queue.push([(r - 1), c, s + 1]);
    if (matrix[r][c +1] === 1) queue.push([r, (c +1), s + 1]);
    if (matrix[r + 1][c] === 1) queue.push([r, c +1, s + 1]);
    if (matrix[r][c - 1] === 1) queue.push([r, c - 1, s + 1]);
  
    // while there is something in the queue
      // find all possible path and add to queue
  }

  return -1;
}

