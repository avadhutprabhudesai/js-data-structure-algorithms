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

class Queue {
  start = null;
  end = null;
  length = 0;

  constructor() {
    this.start = null;
    this.end = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.start === null) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.start == null) {
      return null;
    }
    let temp = this.start;
    this.start = temp.next;
    this.length--;
    return temp.value;
  }

  peek() {
    if (!this.end) {
      return null;
    }
    return this.end.value;
  }
}

export default Queue;
