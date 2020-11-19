
let calculator = (string) => {
  string = string.split(" ").join("");
  let stack = [];
  let left = 0;
  // iterate over to find operators. if its - or + add the previous item of the string to the stack. if its / or * handle the operation then push result to stack
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '+' || string[i] === '-') {
      // push the number to the left to stack
      stack.push(+string.slice(left, i));
      // push the operator to stack
      stack.push(string[i]);
      // update the left pointer
      left = i + 1;
    }
    if (string[i] === '*') {
      let leftNum;
      if (!stack.length) leftNum = +string.slice(left, i);
      else leftNum = stack.pop()
      left = i + 1;
      // get the next number
        // while element is not an operator and i < string.length
          // keep iterating and shifting left pointer
              // after the loop it means we found an operator
      i++;
      while (string[i] !== '+' && string[i] !== '-' && string[i] !== '+' && string[i] !== '/' && i < string.length) i++;
      let rightNum = +string.slice(left, i);
      // push operation result to stack
      stack.push(leftNum * rightNum);
    }
    if (string[i] === '/') {
      // do the same as *
      let leftNum;
      if (!stack.length) leftNum = +string.slice(left, i);
      else leftNum = stack.pop()
      left = i + 1;
      // get the next number
        // while element is not an operator and i < string.length
          // keep iterating and shifting left pointer
              // after the loop it means we found an operator
      i++;
      while (string[i] !== '+' && string[i] !== '-' && string[i] !== '+' && string[i] !== '/' && i < string.length) i++;
      let rightNum = +string.slice(left, i);
      // push operation result to stack
      stack.push(leftNum / rightNum);
    }
  }  
}


let test = ' 6 *2/2'
console.log(calculator(test))