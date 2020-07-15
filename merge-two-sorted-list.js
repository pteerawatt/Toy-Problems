/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  resultNode = new ListNode();
  
  //write a function that takes in l1 and l2 and iterate
  let iterate = (list1, list2) => {
      // if l1 or l2 is null we reached the end so break.
      if (!list1.next || !list2.next ) {
          return;
      } else {
          // else we look at l1 val and l2 val
          if (list1.val <= list2.val) {
              // if l1 val is less or equal to
              // assign the next node to l2
              let tempNode = new ListNode(list1.next.val, list1.next.next )
              list1.next.val = list2.val;
              list1.next.next = tempNode
          
              // recurse the val.next.next of l1 and val.next of l2
              iterate(list1.next.next, list2.next);
          } else {
              // if l1 val is more 
              // reassign l1 first node to l2
              // recurse the val.next.next and val.next of l2
              let tempNode = list1;
              list1.val = list2.val;
              list1.next = tempNode;
              iterate(list1.next.next, list2.next)
          }
          
      }
      
  };
  iterate(l1,l2);
  return l1;
};