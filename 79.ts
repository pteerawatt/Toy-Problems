// Word Search
// given m x n board and a word. see if a word exist in the board.

// this solution does not work
function NOTWORKING_exist(board: string[][], word: string): boolean {
  let checkTop = (i, j, char): boolean => {
      if (i - 1 < 0) return false;
      let top = board[i - 1][j];
      return top === char;
  }
  let checkBottom = (i, j, char): boolean => {
      if (i + 1 > board.length - 1) return false;
      let bottom = board[i + 1][j];
      return bottom === char;
  }
  let checkLeft = (i, j, char): boolean => {
      if (j - 1 < 0) return false;
      let left = board[i][j - 1];
      return left === char;
  }
  let checkRight = (i, j, char): boolean => {
      if (j + 1 > board[0].length - 1) return false;
      let right = board[i][j + 1];
      return right === char;
  }
  
  let checkAll = (i, j, str, strIdx = 0) => {
      if (!str) {
          console.log(i, j, str)
          return true
      }
      if (checkTop(i, j, str[0])) return checkAll(i-1, j, str[strIdx+1], strIdx+1);
      else if (checkBottom(i, j, str[0])) return checkAll(i+1, j, str[strIdx+1], strIdx+1);
      else if (checkLeft(i, j, str[0])) return checkAll(i, j-1, str[strIdx+1], strIdx+1);
      else if (checkRight(i, j, str[0])) return checkAll(i, j+1, str[strIdx+1], strIdx+1);
      return false
  }
  
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
          if(checkAll(i, j, word)) return true;
      }
  }
  return false;
};

function exist(board: string[][], word: string): boolean {
  // iterate through the array
      // check all 4 sides
          // if any side matches, recurse
          // keep track of where we were
              // mark and then demark
  let checkAll = (i , j, word): boolean => {
      // if word.length = 1
          // return match or no-match
      if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) return false
      if (word.length === 1) return word === board[i][j] ? true : false;
      // check if word[0] matches current box at i/j
          // if not match return false
          // mark box
          // if match we continue to check
          // unmark box
      if (word[0] === board[i][j]) {
          let saved = word[0];
          board[i][j] = "";
          
          if (checkAll(i - 1, j, word.substring(1))) return true;
          if (checkAll(i, j + 1, word.substring(1))) return true;
          if (checkAll(i + 1, j, word.substring(1))) return true;
          if (checkAll(i, j - 1, word.substring(1))) return true;
          
          board[i][j] = saved;
      } else return false
  }
  
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j <board[i].length; j++) {
          if (checkAll(i, j, word)) return true;
      }
  }
  return false;
};