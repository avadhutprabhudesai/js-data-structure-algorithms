import bubbleSort from '.';

describe('Testing Bubble Sort', () => {
  it('sorts reverse numeric array', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  it('sorts almost sorted array by skipping unnecessary iterations', () => {
    expect(bubbleSort([1, 2, 5, 3, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
