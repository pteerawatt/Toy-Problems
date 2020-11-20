// write a function that returns an array of the shortest distance between an element and a target

function shortestToChar(S: string, C: string): number[] {
  let result: number[] = [];
  
  for (let i = 0; i < S.length; i++) {
      let min = Infinity;
      for (let r = i, count = 0; r < S.length; r++, count++) {
          if (S[r] === C) {
              min = Math.min(min, count)
          }
      }
      for (let l = i, count = 0; l >= 0; l--, count++) {
          if (S[l] === C) {
              min = Math.min(min, count)
          }
      }
      result.push(min);
  }
  
  return result;
};

