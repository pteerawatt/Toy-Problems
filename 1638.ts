// give two strings. how many sub strings can be generated where theres exactly 1 char different in between substring.

function countSubstrings(s: string, t: string): number {
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < t.length; j++) {
          let x = i;
          let y = j;
          let d = 0;
          while (x < s.length && y < t.length) {
              if (s[x] != t[y]) d++;
              if (d === 1) count++;
              if (d === 2) break;
              x++;
              y++;
          }
      }
  }
  
  return count;
};