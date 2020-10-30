type ListNode = {
  val: number;
  next: object | null;
}

let reverseList = (head: ListNode | null): ListNode | null => {
  if (head) {
      let right = null;
      let left = null;
      while (head) {
          right = head.next;
          head.next = left;
          left = head;
          head = right;
      }
      return left
  }
  
  return null;
};