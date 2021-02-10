// given n, which is the size of an n x n square. return the number of possible paths you can take to get from top left to bottom right. 
  // the only squares avalible are when i >= j


// idea: The possible number of paths it takes to get to (i, j)
// is equal to possible path at above it (i - 1, j) and to the left of it (i, j - 1). we can fillout the whole matrix and return the possible number of path it takes to get to any square.

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


// an iterative approach

function numOfPathsToDest(n) {
  // generate the matrix
  let memo = []
  // fill out matrix with first column as 1
  for (let i = 0; i < n; i++) {
    memo.push([1])
    for (let j = 1; j < n; j++) {
      if (i < j) memo[i].push(0)
      else memo[i].push(-1)
    }
  }
  
  // fill out the rest of the matrix
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (memo[i][j] === 0) break;
      memo[i][j] = memo[i][j-1] + memo[i-1][j];
    }
  }
  
  return memo[n-1][n-1]
}


