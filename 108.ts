/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// idea is to pick a mid point and recursively set left and right node passin in subarray.

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null
  
  let mid = Math.floor(nums.length/2);
  let treeNode = new TreeNode(nums[mid]);
  treeNode.left = sortedArrayToBST(nums.slice(0, mid));
  treeNode.right = sortedArrayToBST(nums.slice(mid + 1));
  return treeNode;
};