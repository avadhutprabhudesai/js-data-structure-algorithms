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

class LinkedList {
  head = null;
  tail = null;
  length = 0;
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length++;
  }

  _traverseToIndex(index) {
    let i = 0,
      current = this.head;

    while (i < index) {
      current = current.next;
      i++;
    }
    return current;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const node = new Node(value);
    let pointerNode = this._traverseToIndex(index - 1);

    node.next = pointerNode.next;
    pointerNode.next = node;

    this.length++;
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let pointerNode = this._traverseToIndex(index - 1),
      unwantedNode = pointerNode.next;

    pointerNode.next = unwantedNode.next;
    this.tail = pointerNode;

    this.length--;
    return;
  }
  get(index) {
    return this._traverseToIndex(index).value;
  }
  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `[${current.value} ${String(current.next)} ] --> `;
      current = current.next;
    }
    return str;
  }
}

export default LinkedList;
