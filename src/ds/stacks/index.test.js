import Stack from '.';
/**
 * push
 * pop
 * peek
 */

let stack;
beforeEach(() => {
  stack = new Stack(10);
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
});
