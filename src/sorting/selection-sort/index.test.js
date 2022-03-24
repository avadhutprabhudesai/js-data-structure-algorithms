import selectionSort from '.';

describe('Testing Selection Sort', () => {
  it('sorts reverse array', () => {
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts random order array', () => {
    expect(selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0])).toEqual([
      0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283,
    ]);
  });
});
