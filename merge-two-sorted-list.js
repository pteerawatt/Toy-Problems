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
  // if list is empty return the none empty one
  resultNode = new ListNode();
  if (l1 === null || l2 === null) {
      l1 = l1 || null;
      l2 = l2 || null;
      return l1 || l2;
  }
  //write a function that takes in l1 and l2 and iterate
  let iterate = (list1, list2) => {
      // if next is null we reached the end so break.
      if (list1.next === null) {
          // end of list1
          if (list1.val <= list2.val) {
              // if 1 < 2, put 2 as tail
              list1.next = list2;
          } else {
              // else set list 2 to be list 1 and then iterate over
              let oldList1 = new ListNode(list1.val);
              list1.val = list2.val
              list1.next = list2.next
              iterate(list1, oldList1)
          }
          return;
      }
      else if (list2.next === null) {
          // end of list2
          if (list1.val <= list2.val) {
              // if val 2 is more we recurse to next val1
              iterate(list1.next, list2)
          } else {
              // else put val 2 first and set tail to list1
              let oldList1 = new ListNode(list1.val, list1.next)
              list1.val = list2.val
              list1.next = oldList1
          }
          return;
      } else {
          // else we look at l1 val and l2 val
          if (list1.val <= list2.val) {
              // if l1 val is less or equal to
              // assign the next node to l2
              let tempNode = new ListNode(list1.next.val, list1.next.next)
              if (list1.next.val >= list2.val) {
                  list1.next.val = list2.val;
                  list1.next.next = tempNode
                  // recurse the val.next.next of l1 and val.next of l2
                  iterate(list1.next.next, list2.next);
              } else {
                  // list1.next is still less so we have to keep iterating through list
                  iterate(list1.next, list2)
              }
          } else {
              // val1 is more than val2 so we put val2 first
              let tempNode = new ListNode(list1.val, list1.next)
              list1.val = list2.val;
              list1.next = tempNode;
              iterate(list1.next, list2.next);
          }
          
      }
      
  };
  iterate(l1,l2);
  return l1;
};