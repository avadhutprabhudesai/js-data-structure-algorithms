import MyArray from './index';

/**
 * Props
 *    - length
 * Methods
 *    - push
 *    - pop
 *    - insert
 *    - map
 */
let arr;
beforeEach(() => {
  arr = new MyArray(1, 2, 3, 4);
});
describe('Testing Array data structure', () => {
  it('returns size of an array with length prop', () => {
    expect(arr.length).toBe(4);
  });
  it('adds an element at the end with push method', () => {
    arr.push(5);
    expect(arr.length).toBe(5);
  });
  it('retrieves an element at the given index with get method', () => {
    expect(arr.get(3)).toBe(4);
  });
  it('retrieves and removes the last element with pop method', () => {
    expect(arr.pop()).toBe(4);
    expect(arr.length).toBe(3);
  });
  it('inserts an element at a given position with insert method', () => {
    arr.insert(0, 100);
    expect(arr.get(0)).toBe(100);
    expect(arr.length).toBe(5);
  });
  it('deletes an element from a given position with delete method', () => {
    arr.delete(0);
    expect(arr.get(0)).toBe(2);
    expect(arr.length).toBe(3);
  });
});
