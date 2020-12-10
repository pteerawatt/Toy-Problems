// write a function that takes a root of a tree and turn it into an array of values, each element representing a row of values of the childrens.

// idea: to use recurusion to push values onto result;

/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */


function levelOrder(root: Node | null): number[][] {
	let result = [];
  
  // use recursion to shift queue and push value to result then recurse all the children.  
  const traverse = (node: Node, level = 0) => {
        // basecase: if !node
        // push node to queue
        // shift queue
        // push shifted val to result
        // loop over children and recurse.
          // the level will be incremented each time.
  }
    
  traverse(root);
  return result;
};