// invert binary tree
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

// idea: use DFS to traverse the tree and reverse the values
const invertTree = (root: TreeNode | null): TreeNode | null => {
  // base case is if root is null, return
  // save the left and save the right, then switch the values
  // recuse left side and recurse right side
  return root;
}
