class Node {
  value = null;
  next = null;
  prev = null;
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  toString() {
    return `${this.value}`;
  }
}

class DoublyLinkedList {
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
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
  prepend(value) {
    const node = new Node(value);
    this.head.prev = node;
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
    let pointerNode = this._traverseToIndex(index);

    let prevNode = pointerNode.prev;
    prevNode.next = node;
    node.prev = prevNode;

    node.next = pointerNode;
    pointerNode.prev = node;

    this.length++;
  }
  remove(index) {
    if (index === 0) {
      let nextNode = this.head.next;
      nextNode.prev = null;
      this.head = this.head.next;
      this.length--;
      return;
    }
    let pointerNode = this._traverseToIndex(index),
      prevNode = pointerNode.prev,
      nextNode = pointerNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
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
      str += `[ ${String(current.prev)} ${current.value} ${String(
        current.next
      )} ] --> `;
      current = current.next;
    }
    return str;
  }
}

export default DoublyLinkedList;
