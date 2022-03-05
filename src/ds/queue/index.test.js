import Queue from '.';
import QueueWithStack from './queue-with-stack';
/**
 * enqueue
 * dequeue
 * peek
 * length
 */

let queue, queueWithStack;
beforeEach(() => {
  queue = new Queue();
  queueWithStack = new QueueWithStack();
});

describe('Testing Queue', () => {
  it('adds an item to the end of queue with enqueue()', () => {
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);

    expect(queue.peek()).toEqual(40);
    expect(queue.length).toEqual(3);
  });

  it('removes an item from the start of queue with dequeue()', () => {
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);

    expect(queue.dequeue()).toEqual(20);
    expect(queue.dequeue()).toEqual(30);
    expect(queue.length).toEqual(1);
    expect(queue.peek()).toEqual(40);
  });
});

describe('Testing Queue With Stack', () => {
  it('adds an item to the end of queue with enqueue()', () => {
    queueWithStack.enqueue(20);
    queueWithStack.enqueue(30);
    queueWithStack.enqueue(40);

    expect(queueWithStack.peek()).toEqual(20);
    expect(queueWithStack.length).toEqual(3);
  });

  it('removes an item from the start of queue with dequeue()', () => {
    queueWithStack.enqueue(20);
    queueWithStack.enqueue(30);
    queueWithStack.enqueue(40);

    expect(queueWithStack.dequeue()).toEqual(20);
    expect(queueWithStack.dequeue()).toEqual(30);
    expect(queueWithStack.length).toEqual(1);
    expect(queueWithStack.peek()).toEqual(40);
  });
});
