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

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {

    
  return true;
};