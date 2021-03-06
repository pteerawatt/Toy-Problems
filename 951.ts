// see if its possible to flip tree x to be equal to tree y. note that not all nodes need to swap

// write a function that determines if tree y is a flip of tree x (mirrior image)

// **** this solution below does not work because it uses BFS. we need to use DFS because not all nodes need to be swap.
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
  let current1: TreeNode;
  let current2: TreeNode;
  let queue1: TreeNode[] | null = [root1];
  let queue2: TreeNode[] | null = [root2];
  let treeArr1: number[] = [];
  let treeArr2: number[] = [];
  let layerLength = 1;

  while (queue1.length || queue2.length) {
    // dequeue
    // push val to treeArr
    // enqueue left and right
    // if no node push null
    if (queue1.length) {
      current1 = queue1.shift();
      if (current1) {
        treeArr1.push(current1.val);
        if (current1.left) {
          queue1.push(current1.left)
        } else queue1.push(null)
        if (current1.right) {
          queue1.push(current1.right)
        } else queue1.push(null)
      } else treeArr1.push(null);
    }
    if (queue2.length) {
      current2 = queue2.shift();
      if (current2) {
        treeArr2.push(current2.val);
        if (current2.left) {
          queue2.push(current2.left)
        } else queue2.push(null)
        if (current2.right) {
          queue2.push(current2.right)
        } else queue2.push(null)
      } else treeArr2.push(null)

    }

    // if treeArr1 and treeArr2 length = layer length
    // layerLength *= 2
    // loop to compare treeArr 1 and 2
    // if not equal, return false
    // clear treeArr
    if (treeArr1.length === layerLength && treeArr2.length === layerLength) {
      console.log(treeArr1, treeArr2)
      layerLength *= 2;
      for (let i = 0, j = treeArr1.length - 1; i < treeArr1.length; i++, j--) {
        if (treeArr1[i] !== treeArr2[j]) return false;
      }
      treeArr1 = [];
      treeArr2 = [];
    }
  }

  return true;
};


//** this solution works but bad time complexity */

function flipEquiv2(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.val !== root2.val) return false;
  let reverse = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);
  let keep = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)
  return  reverse || keep
};