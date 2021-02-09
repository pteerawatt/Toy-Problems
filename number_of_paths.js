// given n, which is the size of an n x n square. return the number of possible paths you can take to get from top left to bottom right. 
  // the only squares avalible are when i >= j

// solution

function numOfPathsToDest(n) {
  // generate the matrix
  let memo = []
  for (let i = 0; i < n; i++) {
    memo.push([])
    for (let j = 0; j < n; j++) {
      memo[i].push(-1)
    }
  }
  
  return numofPathsToSquare(n - 1, n - 1, memo)
}

let numofPathsToSquare = (i, j, memo) => {
  if (i < 0 || j < 0) return 0;
  else if (i < j) memo[i][j] = 0;
  else if (memo[i][j] !== -1) return memo[i][j];
  else if (i === 0 && j === 0) memo[i][j] = 1;
  else {
    memo[i][j] = numofPathsToSquare(i, j - 1, memo) + numofPathsToSquare(i - 1, j, memo)
  }
  return memo[i][j]
}

