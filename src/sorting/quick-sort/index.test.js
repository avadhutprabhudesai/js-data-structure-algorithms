import quickSort from '.';

describe('Testing Inserttion Sort', () => {
  it('sorts reverse array', () => {
    const arr = [5, 4, 3, 2, 1];
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts random order array', () => {
    const arr1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0],
      arr2 = [20, 44, 31, 8, 70, 100, 5];
    expect(quickSort(arr1, 0, arr1.length - 1)).toEqual([
      0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283,
    ]);
    expect(quickSort(arr2, 0, arr2.length - 1)).toEqual([
      5, 8, 20, 31, 44, 70, 100,
    ]);
  });
});
