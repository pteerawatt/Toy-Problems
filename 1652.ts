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
  let arrSum = code.reduce((x, y) => x + y);
  console.log(arrSum, code)
  // for (let i = 0; i)
  // for (let i = 0; i < code.length; i++) {
  //   let total = 0;
  //   for (let j = k; k < )
  // }

  return result;
}

decrypt([1,2,3], 2)