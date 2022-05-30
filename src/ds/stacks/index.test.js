import Stack, { deleteMiddleElement, reverseStack, sort, sortStack } from '.';
/**
 * push
 * pop
 * peek
 */

let stack;
beforeEach(() => {
  stack = new Stack(10, 10);
});

describe('Testing Stack', () => {
  it('pushes an item on top with push()', () => {
    stack.push(20);
    expect(stack.length).toEqual(2);
    expect(stack.peek()).toEqual(20);
  });
  it('pops an item from the top with pop()', () => {
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);

    expect(stack.pop()).toEqual(50);
    expect(stack.pop()).toEqual(40);
    expect(stack.pop()).toEqual(30);
    expect(stack.pop()).toEqual(20);

    expect(stack.length).toEqual(1);
    expect(stack.peek()).toEqual(10);
  });
  it('returns the item from the top with peek() without removing it from stack', () => {
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toEqual(30);
    expect(stack.length).toEqual(3);
  });
  it('underflows the stack', () => {
    try {
      stack.pop();
      stack.pop();
      stack.pop();
      console.log(stack);
    } catch (error) {
      expect(error.message).toBe('Stack underflow');
    }
  });
  it('overflows the stack', () => {
    try {
      stack.push(5);
      stack.push(5);
      stack.push(5);
      stack.push(5);
      stack.push(5);
      stack.push(5);
      stack.push(5);
      stack.push(5);
      stack.push(5);
      stack.push(5);
      stack.push(5);
      stack.push(5);
    } catch (error) {
      expect(error.message).toBe('Stack overflow');
    }
  });
  it('reverses the stack', () => {
    stack.push(5);
    stack.push(4);
    const reversedStack = reverseStack(stack);
    expect(reversedStack.peek()).toBe(10);
    stack.pop();
    expect(reversedStack.peek()).toBe(5);
    stack.pop();
    expect(reversedStack.peek()).toBe(4);
  });

  it('deletes the middle element in odd length stack', () => {
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    const modified = deleteMiddleElement(stack);
    expect(modified.toArray()).toEqual([10, 20, 40, 50]);
  });
  it('deletes the middle element in even length stack', () => {
    stack.push(20);
    stack.push(30);
    stack.push(40);
    const modified = deleteMiddleElement(stack);
    expect(modified.toArray()).toEqual([10, 30, 40]);
  });
  it('sorts a given stack using recursion', () => {
    stack.push(2);
    stack.push(15);
    stack.push(9);
    stack.push(30);
    stack.push(1);
    const sorted = sort(stack);
    expect(sorted.toArray()).toEqual([1, 2, 9, 10, 15, 30]);
  });
});
