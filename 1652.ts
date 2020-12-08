// Defuse the Bomb

// write a function that handles a "wrap arround array" and a number k
// output is an array where every element is the sum of k numbers.
// if k > 0 its forwards
  // from  i + 1 to the last index is k % length + i
// if k < 0 its backwards
  // i always move left
    // if i is neg then i = length - (|k| % length)
// if k = 0, its 0

// idea is to loop over array
  // inner loop will add 

const decrypt = (code, k: number): number[] => {
  let result = [];
  if (k > 0) {
    for (let i = 0; i < code.length; i++) {
        let limits = k;
        let j = i + 1;
        let sum = 0;
        while (limits) {
            sum += code[j % code.length];
            j++;
            limits--;
        }
        result.push(sum)
    }
  }

  return result;
}

decrypt([1,2,3], 2)