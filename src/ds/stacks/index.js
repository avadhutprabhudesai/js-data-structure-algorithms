class Node {
  value = null;
  next = null;

  constructor(value) {
    this.value = value;
  }
}

class Stack {
  top = null;
  bottom = null;
  length = 0;
  size = 0;

  constructor(value, size) {
    if (!size) {
      throw new Error('Size of the stack must be specified');
    }
    let newNode = new Node(value);
    this.top = newNode;
    this.bottom = this.top;
    this.length++;
    this.size = size;
  }

  peek() {
    return this.top.value;
  }
  push(value) {
    if (this.length === this.size) {
      throw new Error('Stack overflow');
    }
    let newNode = new Node(value);
    this.top.next = newNode;
    this.top = newNode;
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      throw Error('Stack underflow');
    }
    let cursor = this.bottom;
    while (cursor && cursor.next !== this.top) {
      cursor = cursor.next;
    }

    let toReturn = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = cursor;
      this.top.next = null;
    }
    this.length--;
    return toReturn.value;
  }

  toString() {
    let cursor = this.bottom,
      str = '';

    while (cursor) {
      str += `${cursor.value} ---> `;
      cursor = cursor.next;
    }

    return str;
  }
}

export default Stack;
