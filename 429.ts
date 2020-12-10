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
  let queue = [];
    
  const traverse = (node) => {
        
  }
    
  traverse(root);
  return result;
};