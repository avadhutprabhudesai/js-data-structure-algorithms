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
    return this.top ? this.top.value : null;
  }
  push(value) {
    if (this.length === this.size) {
      throw new Error('Stack overflow');
    }
    let newNode = new Node(value);
    if (this.top) {
      this.top.next = newNode;
      this.top = newNode;
    } else {
      this.top = newNode;
      this.bottom = this.top;
    }
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

  toArray() {
    let cursor = this.bottom,
      arr = [];

    while (cursor) {
      arr.push(cursor.value);
      cursor = cursor.next;
    }

    return arr;
  }
}

function insertAtBottom(stack, val) {
  /**
   * ===base condition
   * stack is empty
   *  push val
   * ===hypothesis
   * pop and store current top
   * insertAtBottom(remaining)
   *
   * ===induction
   * push popped ele to the stack
   */
  if (stack.length === 0) {
    stack.push(val);
    return stack;
  }

  const currentTop = stack.pop();
  const newStack = insertAtBottom(stack, val);

  newStack.push(currentTop);
  return newStack;
}

export function reverseStack(stack) {
  /**
   * ===base condition
   * stack length is 1 return as is
   * ===hypotheses
   *  pop and store current top
   *  reverseStack(remaining)
   *
   * ===induction
   *  insert popped elment at the bottom of reversed stack
   *
   */
  if (stack.length === 1) {
    return stack;
  }

  const top = stack.pop();
  const newStack = insertAtBottom(reverseStack(stack), top);
  return newStack;
}

export function deleteMiddleElement(stack) {
  let k = Math.floor(stack.length / 2) + 1;
  function recursiveDelete(stack, k) {
    /**
     * ===base condition
     * if k === 1, pop top and return stack;
     * ===hypothesis
     * pop and store top
     * delete k-1 element in remaining stack
     * ===induction
     * push stores element back to stack and return stack
     */
    if (k === 1) {
      stack.pop();
      return stack;
    }

    let currentTop = stack.pop();
    let remainingStack = recursiveDelete(stack, k - 1);

    remainingStack.push(currentTop);
    return remainingStack;
  }

  return recursiveDelete(stack, k);
}

export function insert(stack, value) {
  /**
   * ===base condition
   if(stack is empty || stack.top <=value) push value and return stack
   * ===hypothesis
   pop current top and insert in remaining
   * ===induction
  push the current top on the returned stack
   */
  if (stack.length === 0 || stack.top.value <= value) {
    stack.push(value);
    return stack;
  }
  const currentTop = stack.pop();
  const inserted = insert(stack, value);
  inserted.push(currentTop);
  return inserted;
}

export function sort(stack) {
  /**
   * ===base condition
   * if(stack is empty or length === 1)
   * return stack;
   * ===hypothesis
   * pop currentTop and store
   * sort remaining array
   * ===induction
   * insert currentTop at proper position
   *
   */
  if (stack.length === 1) {
    return stack;
  }

  const currentTop = stack.pop();
  const sortedStack = sort(stack);
  const stackAfterInserting = insert(sortedStack, currentTop);
  return stackAfterInserting;
}

export default Stack;
