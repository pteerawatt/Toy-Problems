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
    if (typeof l1 === 'number' && typeof l2 === 'number') {
        if (leftOver) {
            if (leftOver > 9) {
                result.val = value;
                result.next = new ListNode();
                result.next.val = Math.floor(leftOver/10);
            } else {
                result.val = leftOver;
            }
        }
        return;
    };
    leftOver = sum > 9 ? Math.floor(sum/10) : 0;
    result.val = value;
    result.next = new ListNode();
    addTwoNumbers(l1.next || null, l2.next || null, result.next, leftOver);
    return result;
};