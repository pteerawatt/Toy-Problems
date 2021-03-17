/*
Isomorphic Strings

given two strings, determine if they are isomorphic -- you can replace characters to make them the same (must maintain order and frequency)

*/

/*
I: two strings
O: boolean
C: order of characters must remain the same
E: string is uneven length

*/

// idea: loop over the strings and store them using a count. if the count doesn't match return false
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  const stoS = {};
  const stoT = {};
  let countS = 1;
  let countT = 1;
  
  for (let i = 0; i < s.length; i++) {
      // check if char in sto
      if (!stoS[s[i]]) stoS[s[i]] = countS++;
      if (!stoT[t[i]]) stoT[t[i]] = countT++;
      // check if the nums are the same\
      if (stoS[s[i]] !== stoT[t[i]]) return false;
  }
  return true;
};