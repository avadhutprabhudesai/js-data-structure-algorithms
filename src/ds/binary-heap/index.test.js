/**
 * insert
 * delMax
 */

import BinaryHeap from '.';

let heap;
beforeEach(() => {
  heap = new BinaryHeap();
  heap.insert(10);
  heap.insert(20);
  heap.insert(30);
  heap.insert(40);
});

describe('Testing Binary heaps', () => {
  it('returns the root node', () => {
    expect(heap.getRoot()).toBe(40);
  });
  it('returns a left child given an index', () => {
    expect(heap.getLeftChild(1)).toBe(30);
  });
  it('returns a right child given an index', () => {
    expect(heap.getRightChild(1)).toBe(20);
  });
  it('returns a parent given an index', () => {
    expect(heap.getParent(4)).toBe(30);
    expect(heap.getParent(3)).toBe(40);
  });
  it('inserts a value and adjusts the heap to have largest value in the root', () => {
    heap.insert(50);
    expect(heap.getRoot()).toBe(50);
    expect(heap.getLeftChild(1)).toBe(40);
    expect(heap.getRightChild(1)).toBe(20);
    expect(heap.getParent(5)).toBe(40);
  });
  it('deletes the root and finds a new root', () => {
    heap.insert(50);
    heap.insert(5);
    heap.delMax();
    expect(heap.getRoot()).toBe(40);
    expect(heap.getLeftChild(1)).toBe(30);
    expect(heap.getRightChild(1)).toBe(20);
    expect(heap.getParent(5)).toBe(30);
  });
});
