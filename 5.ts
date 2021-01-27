// Longest Palindromic Substring

// given a string, return the longest palindromic substring (read backwords same as forward)

// Naive approach using 2 loops
function longestPalindrome(s: string): string {
  let maxString = s[0];
  let currentString;
  let reverse;
  for (let i = 0; i <s.length; i++) {
      for (let j = i; j <s.length; j++) {
          currentString = s.slice(i, j + 1)
          reverse = currentString.split("").reverse().join("");
          if (currentString === reverse) {
              maxString = maxString.length < currentString.length ? currentString : maxString    
          }
      }
  }
  return maxString
};


