import {
  mcm,
  mcmMemoized,
  palindromPartition,
  palindromPartitionMemoized,
} from '.';

describe('MCM', () => {
  it('finds the min cost for matrix chain multiplication using recursive technique', () => {
    expect(mcm([10, 20, 30, 40])).toBe(18000);
    expect(mcm([40, 20, 30, 10, 30])).toBe(26000);
  });
  it('finds the min cost for matrix chain multiplication using memoized technique', () => {
    expect(mcmMemoized([10, 20, 30, 40])).toBe(18000);
    expect(mcmMemoized([40, 20, 30, 10, 30])).toBe(26000);
  });
  it('finds the min number of partition to turn a string into a palindrome', () => {
    expect(palindromPartition('meter')).toBe(2);
    expect(palindromPartition('kayak')).toBe(0);
  });
  it('finds the min number of partition to turn a string into a palindrome', () => {
    expect(palindromPartitionMemoized('meter')).toBe(2);
    expect(palindromPartitionMemoized('kayak')).toBe(0);
  });
});
