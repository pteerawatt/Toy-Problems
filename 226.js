/*
Invert Binary Tree

Given a binary search tree, inver the left and the right of every element

I: a BST
O: reversed BST
C: all of the right/left are reversed
E: left/right can be null

idea: use BFS to swap left and right

init a queue use an array with an iterator in the front
    update target node
    memo right
    set right = left
    left = memo
    push left 
    push right 

*/

var invertTree = function(root) {
  if (root === null) return null;
  const queue = [root];
  let queueNum = 0;
  let tNode;
  let memo;
  
  while (queueNum < queue.length) {
      tNode = queue[queueNum++];
      memo = tNode.right || null;
      tNode.right = tNode.left || null;
      tNode.left = memo;
      if (tNode.right) queue.push(tNode.right);
      if (tNode.left) queue.push(tNode.left);
  }
  return root;
};


// below is a better solution with better space complexity
  // we dont have to use queue, just reverse down the tree
var invertTree = function(root) {
  if (!root) return null
  const invert = (root) => {
      if (!root){return}
      let left = root.left
      root.left = root.right
      root.right = left
      invert(root.left)
      invert(root.right)
      return root
  }
  
  root = invert(root)
  return root
};