import { mergeSorted, reverseString } from './exercises';
/**
 * Reverse a string
 */

describe('String exercises', () => {
  it('reverses a string', () => {
    expect(reverseString('avadhut')).toBe('tuhdava');
  });
  it('merges 2 already sorted arrays into one sorted array', () => {
    expect(mergeSorted([0, 5, 23, 60], [4, 15, 19])).toEqual([
      0, 4, 5, 15, 19, 23, 60,
    ]);
    expect(mergeSorted([0, 1, 2, 3], [1, 2, 3, 4, 5])).toEqual([
      0, 1, 1, 2, 2, 3, 3, 4, 5,
    ]);
  });
});
