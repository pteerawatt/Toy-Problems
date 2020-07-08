// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.


// look for the first parenthesis and then the second parenthasis. and then check within these parenthasis
var isValid = function(s) {
  // let start = ['(', '{', '['];
  // let end = [')', '}', ']'];
  let pairs = {
      '(' : ')',
      '{' : '}',
      '[' : ']'
  };
  // split the string to array
  let arr = s.split('');
  let valid = true;
  
  let checkForInvalid = (block) => {
      // this funtion checks for invalid inside a block of parens
          if (block.length === 1) {
              valid = false;
              return;
          }
          if (block.length > 2) {
              let startParen = block[0];

              if (!(startParen in pairs)) {
              // if the block starts with closing paren its invalid
              valid = false;
              return;
              }

              // find index of end parens
              let indexOfClosingParen = block.indexOf(pairs[startParen])
              if (indexOfClosingParen < 0) {
                  valid = false;
                  return;
              }
              let insideBlock = block.slice(1, indexOfClosingParen);
              console.log(insideBlock)
              checkForInvalid(insideBlock);
          }    
      
  }
  
  checkForInvalid(arr);
  
  return valid;
};