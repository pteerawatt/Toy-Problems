// add two numbers

// given two linked list, representing a number in reversed (each node contains 1 didgit). return the sum of the linked list in a linked list.

// idea: recursively add the number and return the final array.
// when the sum of a digit is above 10
// push the % value
// save the leftover, so we can add to the next
// each left over is divided by 10 when moving to the next digit
// when one linked list is out of numbers, we need to carry out the left over sum.
// we stop recursion when l1.val + l2.val + leftOver = 0

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, result = new ListNode(), leftOver = 0): ListNode | null {
  let val1 = l1 === null ? 0 : l1.val;
  let val2 = l2 === null ? 0 : l2.val;
  let sum = val1 + val2 + leftOver;
  let value = sum % 10;
  leftOver = sum > 9 ? Math.floor(sum / 10) : 0;
  result.val = value;
  if (!l1.next && !l2.next) {
    if (leftOver) {
      if (leftOver > 9) {
        result.next.val = leftOver % 10;
        result.next.next = new ListNode();
        result.next.next.val = Math.floor(leftOver / 10);
      } else {
        result.next.val = leftOver;
      }
    }
    return;
  }
  result.next = new ListNode();
  addTwoNumbers(l1.next, l2.next, result.next, leftOver);
  return result;
};