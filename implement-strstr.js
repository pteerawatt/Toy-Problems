// Given a string, return the index of the string inside the string.
// if not found return -1, if find string is empty return 0.


var strStr = function(haystack, needle) {
  // main idea is we interate over haystack and we check to see if the following elements align with needle. we do this by recursively calling haystack and decreasing length
  
  //edge cases
  // index = 0
  // recursive function. takes haystack
  // if needle    
  // basecase: if haystack is null or empty
          // this means all match, so we return the first index we were looking at
      // iterate haystack
          // if elements matches recurse(haystack -1, needle -1)
          // else if not match, recuse(haystack -1, needle)
  
  //return index
};