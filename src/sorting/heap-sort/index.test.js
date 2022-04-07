import MaxHeap from '.';

describe('Testing Inserttion Sort', () => {
  it('sorts reverse array', () => {
    let heap = new MaxHeap();
    heap.insert(2);
    heap.insert(5);
    heap.insert(10);
    heap.insert(20);
    heap.insert(30);
    expect(heap.print()).toEqual([30, 20, 5, 2, 10]);
  });

  it('creates a max-heap using heapify', () => {
    let heap = new MaxHeap([5, 10, 15, 20, 25, 30, 35, 40]);
    heap.buildMaxHeap();
    expect(heap.print()).toEqual([40, 25, 35, 20, 5, 30, 15, 10]);
  });

  it('deletes and returns the root node and adjust the heap', () => {
    let heap = new MaxHeap([5, 10, 15, 20, 25, 30, 35, 40]);
    heap.buildMaxHeap();
    expect(heap.delete()).toBe(40);
    expect(heap.print()).toEqual([35, 25, 30, 20, 5, 10, 15]);
  });
  it('sorts the array with heapSort', () => {
    let heap = new MaxHeap([5, 10, 15, 20, 25, 30, 35, 40]);
    heap.buildMaxHeap();
    expect(heap.sort()).toEqual([40, 35, 30, 25, 20, 15, 10, 5]);
  });
});
