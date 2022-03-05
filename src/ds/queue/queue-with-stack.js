class Node {
  value = null;
  next = null;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
  toString() {
    return `${this.value}`;
  }
}
class QueueWithStack {
  constructor() {
    this.front = [];
    this.back = [];
    this.length = this.back.length;
  }

  enqueue(value) {
    this.back.push(value);
    this.length = this.back.length;
  }
  dequeue() {
    while (this.back.length) {
      this.front.push(this.back.pop());
    }
    const val = this.front.pop();
    while (this.front.length) {
      this.back.push(this.front.pop());
    }
    this.length = this.back.length;
    return val;
  }

  peek() {
    if (!this.back.length) {
      return null;
    }
    return this.back[0];
  }
}

export default QueueWithStack;
