import {
  countNumberOfCombinationsForGivenSum,
  countNumberOfSubsets,
  countNumberOfSubsetsWithGivenDiff,
  equalSumPartition,
  knapSack,
  memoizedKnapSack,
  minimumSubSetDifference,
  rodCutting,
  subsetSum,
  topdownKnapSack,
} from '.';

describe('Testing 0-1 knapsack', () => {
  it('calculates profit based on weights and values array and the weight of a sack', () => {
    expect(knapSack([10, 20, 30], [60, 100, 120], 50)).toBe(220);
    expect(knapSack([60, 70, 80], [60, 100, 120], 50)).toBe(0);
    expect(knapSack([60, 20, 20], [60, 100, 120], 50)).toBe(220);
    expect(knapSack([10, 20, 20], [60, 100, 120], 50)).toBe(280);
  });
  it('calculates profit using memoized knapsack', () => {
    expect(memoizedKnapSack([10, 20, 20], [60, 100, 120], 50)).toBe(280);
  });
  it('calculates profit using topdown knapsack', () => {
    expect(topdownKnapSack([60, 20, 20], [60, 100, 120], 50)).toBe(220);
    expect(topdownKnapSack([10, 20, 20], [60, 100, 120], 50)).toBe(280);
    expect(topdownKnapSack([1, 2, 3, 4], [1, 4, 6, 8], 5)).toBe(10);
  });
  it('finds if any subset which equals the sum', () => {
    expect(subsetSum([2, 2, 2], 3)).toBe(false);
    expect(subsetSum([1, 2, 2, 1], 4)).toBe(true);
  });
  it('finds if we can have equal sum partition', () => {
    expect(equalSumPartition([1, 5, 11, 5])).toBe(true);
    expect(equalSumPartition([1, 2, 3, 5])).toBe(false);
  });
  it('finds count of subset which equals the sum', () => {
    expect(countNumberOfSubsets([2, 3, 5, 6, 8, 10], 10)).toBe(3);
    expect(countNumberOfSubsets([1, 2, 3, 4, 5], 5)).toBe(3);
  });
  it('finds the minimum subset difference of a given array', () => {
    expect(minimumSubSetDifference([1, 2, 7])).toBe(4);
    expect(minimumSubSetDifference([2, 3, 4, 5])).toBe(2);
  });

  it('finds the count of subset with given difference of a given array', () => {
    expect(countNumberOfSubsetsWithGivenDiff([1, 1, 2, 3], 1)).toBe(3);
    expect(countNumberOfSubsetsWithGivenDiff([1, 2, 3, 4, 5], 2)).toBe(0);
    expect(countNumberOfSubsetsWithGivenDiff([1, 2, 4, 7], 2)).toBe(1);
  });

  it('finds the max profit in rod cutting problem', () => {
    expect(rodCutting(4, [2, 1, 3])).toBe(8);
    expect(rodCutting(4, [4, 3, 8, 1])).toBe(16);
  });
  it('finds number of combinations of coins in which total equals given sum', () => {
    expect(countNumberOfCombinationsForGivenSum([1, 2, 3], 5)).toBe(5);
  });
});
