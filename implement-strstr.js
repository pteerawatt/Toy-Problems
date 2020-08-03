// Given a string, return the index of the string inside the string.
// if not found return -1, if find string is empty return 0.


var strStr = function(haystack, needle) {
  // main idea is we interate over haystack and we check to see if the following elements align with needle. we do this by recursively calling haystack and decreasing length
  
  //edge cases
  // current index
  // match index
  // recursive function. takes haystack
  // increase curr index
  // basecase: if needle is empty, we found a match
      // return match index
  // basecase: if haystack is empty
          // this means we finished the whole haystack and no match, return -1
      // iterate haystack: compare first character of haystack and needle
          // set index to 
          // if elements matches recurse(haystack -1, needle -1)
              // if match index is false, set match index to current index
          // else if not match, recuse(haystack -1, needle)
              // set match index to false
};