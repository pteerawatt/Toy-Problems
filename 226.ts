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
const invertTreeDFS = (root: TreeNode | null): TreeNode | null => {
  // base case is if root is null, return
  if (!root) return null;
  // save the left and save the right, then switch the values
  let left = root.left;
  root.left = root.right;
  root.right = left;
  // recuse left side and recurse right side
  invertTreeDFS(root.left);
  invertTreeDFS(root.right);

  return root;
}

// idea: use BFS to traverse the tree and reverse the values
const invertTreeBFS = (root: TreeNode | null): TreeNode => {
  // use queue DS to have order of traverse
  // use while loop to dequeue and swap nodes
  let queue: TreeNode[] = [root];
  let current;

  while (queue.length) {
    current = queue.shift();
    if (current) {
      let left = current.left;
      current.left = current.right;
      current.right = left;
      queue.push(current.left);
      queue.push(current.right);
    }
  }
  return root;
  return root;
}
