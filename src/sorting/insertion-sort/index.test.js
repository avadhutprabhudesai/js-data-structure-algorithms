import { insertionSort } from '.';

describe('Testing Inserttion Sort', () => {
  it('sorts reverse array', () => {
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts random order array', () => {
    expect(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])).toEqual([
      0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283,
    ]);
    expect(insertionSort([20, 44, 31, 8, 70, 100, 5])).toEqual([
      5, 8, 20, 31, 44, 70, 100,
    ]);
  });
});
