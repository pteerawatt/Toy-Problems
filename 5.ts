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


// expanding widow method

// the idea is palindrome string are mirrors from the middle. so we have one loop iterating through the array and helper functions to check that the surrounding elements to the left and right are the same. if they are the same it is palindromic

function longestPalindromeMirror(s: string): string {
  let maxString = "";
  let string1;
  let string2;
  for (let i = 0; i < s.length; i++) {
      string1 = mirrorWithMid(i, s);
      string2 = mirrorWOMid(i, s);
      maxString = maxString.length < string1.length ? string1 : maxString;
      maxString = maxString.length < string2.length ? string2 : maxString;
  }
  return maxString;
};

let mirrorWithMid = (mid: number, s: string): string => {
  let left = mid - 1;
  let right = mid + 1;
  let max = "";
  
  while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
          max = s.slice(left, right + 1);
          left--;
          right++;
      }
      else break;
  }
  return max === "" ? s[mid] : max;
}

let mirrorWOMid = (left: number, s: string): string => {
  let right = left + 1;
  let max = "";
  
  while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
          max = s.slice(left, right + 1);
          left--;
          right++;
      }
      else break;
  }
  return max === "" ? s[left] : max;
}