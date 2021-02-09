// Linked List Cycle

// given a linkedlist determine weather the list repeats itself.

// bruteforce approach
// loop through the list and memo
// for every item loop through memo

class ListNode {
  val: number;
  next: ListNode;
  constructor(val) {
    this.val = val,
    this.next = null;
  }
}

function BAD_hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let sto = {}
  let i = 0;
  let currentNode = head;

  while (true) {
    for (let node in sto) {
      if (sto[node] === currentNode) return true
    }
    sto[i++] = currentNode;
    if (!currentNode.next) return false
    currentNode = currentNode.next;
  }
  return false
};