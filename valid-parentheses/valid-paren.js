// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.


// look for the first parenthesis and then the second parenthasis. and then check within these parenthasis
var isValid = function(s) {
  // IDEA: iterate through the string and use stack to make sure that a closing paren is        matched to the closest open paren
  // make stack arr
  let stack = []
  
  // define open/close obj
  let open = {
      '(': ')',
      '[': ']',
      '{': '}',
  };
  let close = {
      ')': '(',
      ']': '[',
      '}': '{',
  };
  
  // split string to arr
  let arr = s.split('')
  
  // iterate throug arr
  for (let i = 0; i < arr.length; i++) {
      // if open, push to stack
      if (open[arr[i]]) {
          stack.push(arr[i]);
      } else {
          // if close, check to see if most recent open is matching paren
          if (close[arr[i]] === stack[stack.length -1]) {
              // if matching delete from stack
              stack.length --;
          } else {
              // if not matching return false
              return false;
          }
      }
  }

  if (stack.length === 0) {
      // if array.length is 0
      // return true
      return true
  }
  
  return false
}