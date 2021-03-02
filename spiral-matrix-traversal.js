/*
spiral matrix traversal

given a matrix, traverse the maxtrix in a counter clock wise and add elements to the array
*/

function spiralCopy(inputMatrix) {
  if (inputMatrix.length === 1) return inputMatrix[0];
  let result = [];

  let top = 0;
  let bottom = inputMatrix.length - 1;
  let left = 0;
  let right = inputMatrix[0].length - 1;

  let order = "right"
  while (true) {
    if (order === "right") {
      for (let i = left; i <= right; i++) {
        result.push(inputMatrix[top][i]);
        inputMatrix[top][i] = null;
      }
      top++;
      if (inputMatrix[top][right]) order = "down";
      else break;
    } else if (order === "down") {
      for (let i = top; i <= bottom; i++) {
        result.push(inputMatrix[i][right]);
        inputMatrix[i][right] = null;
      }
      right--;
      if (inputMatrix[bottom][right]) order = "left";
      else break;
    } else if (order === "left") {
      for (let i = right; i >= left; i--) {
        result.push(inputMatrix[bottom][i]);
        inputMatrix[bottom][i] = null;
      }
      bottom--;
      if (inputMatrix[top][left]) order = "up";
      else break;
    } else if (order === "up") {
      for (let i = bottom; i >= top; i--) {
        result.push(inputMatrix[i][left]);
        inputMatrix[i][left] = null;
      }
      left++;
      if (inputMatrix[top][left]) order = "right";
      else break;
    }
  }
  return result;
}