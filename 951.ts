// flip equivalent binary trees

// write a function that determines if tree y is a flip of tree x (mirrior image)


class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

// idea: use BFS to determine if are reversed
  // BFS
    // use queue: push all child to an array
  // iterate over the two arrays to check that they are even
function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let current1 = root1;
  let current2 = root2;
  let queue1: TreeNode[] = [];
  let queue2: TreeNode[] = [];
  let treeArr1: number[] = [];
  let treeArr2: number[] = [];
  let layerLength = 1;

  while (queue1.length || queue2.length) {
    // dequeue
    // push val to treeArr
    // enqueue left and right
      // if no node push null
    // if treeArr1 and treeArr2 length = layer length
      // layerLength *= 2
      // loop to compare treeArr 1 and 2
        // if not equal, return false
      // clear treeArr
  }

    
  return true;
};
// 1 2 3 4 5 6 7 8
// 1 3 2 6 4 5 8 7