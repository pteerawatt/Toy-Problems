// Min Stack

// wirte a stack with push / pop / top / getMin methods
// idea every item on the stack also has a current min memorized. this way when an item is poped the current min remains.

class MinStack {
  stack: {
      val: number;
      min: number;
  }[];
  min: number;
  constructor() {
      this.stack = []
  }

  push(x: number): void {
      let prevMin = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min
      this.stack.push({val: x, min: Math.min(prevMin, x)});
  }

  pop(): void {
      this.stack.pop()
  }

  top(): number {
      return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
      return this.stack[this.stack.length - 1].min;
  }
}
