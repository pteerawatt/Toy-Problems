// Given a string, return the index of the string inside the string.
// if not found return -1, if find string is empty return 0.


var strStr = function(haystack, needle) {
  // main idea is we interate over haystack and we check to see if the following elements align with needle. we do this by recursively calling haystack and decreasing length
  
  //edge cases
  if (needle = '') {
      return -1;
  }
  // current index
  let currIndex = 0;
  // match index
  let matchIndex = false;
  // recursive function. takes haystack
  let iterate = (hay, ned) => {
      // increase curr index
      currIndex++;
  // basecase: if needle is empty, we found a match
      if (ned === '') {
          // return match index
          return matchIndex;
      } else if (hay === '') {
  // basecase: if haystack is empty
          // this means we finished the whole haystack and no match, return -1
          return -1;
      }
      // iterate haystack: compare first character of haystack and needle
      if (hay[0] === ned[0]) {
          // if elements matches recurse(haystack -1, needle -1)
              // if match index is false, set match index to current index
          if (matchIndex === false) {
              matchIndex = currIndex;
          }
          iterate(hay.substring(1), ned.substring(1));
      } else {
          // else if not match, recuse(haystack -1, needle)
              // set match index to false
          matchIndex = false;
          iterate(hay.substring(1), needle)
      }
  }
  
  return iterate(haystack, needle);
};