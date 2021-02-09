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

// method 2: using 2 runners running at different speed. if the list circles, eventually the runner will be at the same spot

function hasCycle(head: ListNode | null): boolean {
  let runner1 = head;
  let runner2 = head;
  while(runner1 && runner2) {
      runner1 = runner1.next;
      runner2 = runner2.next;
      if (runner2) runner2 = runner2.next
      else return false;
      if (runner1 === runner2) return true;
  }
  return false;
};