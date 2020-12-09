// write a function to determine if first player wins

// the game is an array of numbers, where player can pick from first or last of the array. there is no tie

// this algo always pick the first biggest number first
const stoneGame = (piles: number[]): boolean => {
  let fTotal = 0;
  let sTotal = 0;
  let fpt = true;

  let left = 0;
  let right = piles.length - 1;

  while (left <= right) {
      let max;
      if (piles[left] > piles[right]) {
          max = piles[left];
          left++;
      } else {
          max = piles[right];
          right--;
      }
      if (fpt) {
          fTotal += max;
          fpt = false;
      } else {
          sTotal += max;
          fpt = true;
      }
      console.log(fTotal, sTotal)
  }
  
  return fTotal > sTotal
}