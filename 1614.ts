// write a function that counts the deepest nesting count of valid parens.

function maxDepth(s: string): number {
  let storage: string[] = [];
  let freq = 0;
  let maxFreq = 0;
  for (let e of s) {
      if (e === '(') {
          storage.push(e);
          freq++;
          maxFreq = Math.max(maxFreq, freq);
      } else if (e === ')') {
          storage.pop();
          freq--;
      }
  }
  return maxFreq;
};
