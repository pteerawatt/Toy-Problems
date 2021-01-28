// Combination Sum

// given and array and a target. find all the possible combinations of elements that can sum up to target. elements can be repeated.


// idea: recursively find paths that add to target

function combinationSum(candidates: number[], target: number): number[][] {
  let result = []
  const iterate = (idx = 0, collection = [], sum = 0) => {
      if (sum === target) result.push([...collection]);
      if (sum > target) return;
      for (let i = idx; i < candidates.length; i++) {
          sum += candidates[i];
          collection.push(candidates[i]);
          iterate(idx, collection, sum);
          // backtrack, remove from collection
          let removed = collection.pop();
          sum -= removed;
          idx++;
      }
  }
  iterate()
  return result;
};

// method above is bad time complexity