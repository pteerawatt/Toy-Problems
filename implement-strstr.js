// Given a string, return the index of the string inside the string.
// if not found return -1, if find string is empty return 0.

// this method doesnt work for 'mississippi' and 'issip', because once there is a match with the haystack and the needle, the character gets eliminated and there for we never recheck. this needs to be done with a loop.
// var strStr = function(haystack, needle) {
//   // main idea is we interate over haystack and we check to see if the following elements align with needle. we do this by recursively calling haystack and decreasing length
//   //edge cases
//   if (needle === '') {
//       return 0;
//   }
//   // current index
//   let currIndex = 0;
//   // match index
//   let matchIndex = -1;
//   // recursive function. takes haystack
//   let iterate = (hay, ned) => {
//   // basecase: if needle is empty, we found a match
//       if (ned === '') {
//           // return match index
//           console.log(matchIndex)
//           return matchIndex;
//       } else if (hay === '') {
//   // basecase: if haystack is empty
//           // this means we finished the whole haystack and no match, return -1
//           return -1;
//       }
//       // iterate haystack: compare first character of haystack and needle
//       if (hay[0] === ned[0]) {
//           // if elements matches recurse(haystack -1, needle -1)
//               // if match index is false, set match index to current index
//           if (matchIndex === -1) {
//               matchIndex = currIndex;
//               currIndex++;
//           }
//           return iterate(hay.substring(1), ned.substring(1));
//       } else {
//           // else if not match, recuse(haystack -1, needle)
//               // set match index to false
//           currIndex++;
//           matchIndex = -1;
//           return iterate(hay.substring(1), needle)
//       }
//   }
//   return iterate(haystack, needle);
// };

// this new approach is to iterate over the haystack and when we find a match iterate over the needle. we have a point to keep track of first matched index. if we finish iterating over haystack and all matches we return matched index.
var strStr = function(haystack, needle) {
  if (needle === '') {
      return 0;
  }
  // iterate over haystack
  for (let i = 0; i < haystack.length - (needle.length -1); i++) {
      // iterate through needle
      for (let j = 0; j < needle.length; j++) {
          if (needle[j] !== haystack[i+j]) {
              // if miss match
              // reset matched index, break
              break;
          }
          if (j === needle.length -1) {
              // if we got the end of needle, we found a match so return the original index we start looping at haystack
              return i;
          }
      }  
  }  
  return -1;
};
