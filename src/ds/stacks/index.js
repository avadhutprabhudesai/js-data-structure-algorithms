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

  constructor(value) {
    let newNode = new Node(value);
    this.top = newNode;
    this.bottom = this.top;
    this.length++;
  }

  peek() {
    return this.top.value;
  }
  push(value) {
    let newNode = new Node(value);
    this.top.next = newNode;
    this.top = newNode;
    this.length++;
  }
  pop() {
    let cursor = this.bottom;
    while (cursor.next !== this.top) {
      cursor = cursor.next;
    }
    let toReturn = this.top;
    this.top = cursor;
    this.top.next = null;
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
