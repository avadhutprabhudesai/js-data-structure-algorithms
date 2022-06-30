import {
  lcsMemoized,
  lcsRecursive,
  lcsTopDown,
  longestCommonSubstring,
  lps,
  minDeletionToMakeItPalindrome,
  minNumberOfDeletionAndInsertion,
  printLongestCommonSequence,
  printSCS,
  seqPatternMatching,
  shortestCommonSuperSequenceLength,
} from '.';

describe('LCS', () => {
  it('finds the length of longest common subsequence using recursive technique', () => {
    expect(lcsRecursive('abcdef', 'abdfghr')).toBe(4);
  });
  it('finds the length of longest common subsequence using memoized technique', () => {
    expect(lcsMemoized('abcdef', 'abdfghr')).toBe(4);
    expect(lcsMemoized('ab', 'acbe')).toBe(2);
    expect(lcsMemoized('abcd', 'pqrs')).toBe(0);
  });
  it('finds the length of longest common subsequence using bottom-up technique', () => {
    expect(lcsTopDown('abcdef', 'abdfghr')).toBe(4);
    expect(lcsTopDown('ab', 'acbe')).toBe(2);
    expect(lcsTopDown('abcd', 'pqrs')).toBe(0);
  });
  it('finds the length of longest common substring using bottom-up technique', () => {
    expect(longestCommonSubstring('ab', 'abc')).toBe(2);
    expect(longestCommonSubstring('abcde', 'ababcde')).toBe(5);
  });

  it('prints the longest common subsequence ', () => {
    expect(printLongestCommonSequence('acbcf', 'abcdaf')).toBe('abcf');
  });

  it('finds the length of shortest common supersequence', () => {
    expect(shortestCommonSuperSequenceLength('abac', 'cab')).toBe(5);
    expect(shortestCommonSuperSequenceLength('Geek', 'eke')).toBe(5);
    expect(shortestCommonSuperSequenceLength('AGGTAB', 'GXTXAYB')).toBe(9);
  });
  it('prints  shortest common supersequence', () => {
    expect(printSCS('abac', 'cab')).toBe('cabac');
    expect(printSCS('Geek', 'eke')).toBe('Geeke');
    expect(printSCS('AGGTAB', 'GXTXAYB')).toBe('AGGXTXAYB');
    expect(printSCS('HELLO', 'GEEK')).toBe('HGELLOEK');
  });
  it('finds min no of deletion and insertion to convert one string into another', () => {
    const [del, ins] = minNumberOfDeletionAndInsertion('heap', 'pea');
    expect(del).toBe(2);
    expect(ins).toBe(1);
  });
  it('finds the length of longest palindromic subsequence of a string', () => {
    expect(lps('METER')).toBe(3);
    expect(lps('KAYAK')).toBe(5);
  });
  it('finds the number of minimum deletion to make a string a palindrome', () => {
    expect(minDeletionToMakeItPalindrome('METER')).toBe(2);
    expect(minDeletionToMakeItPalindrome('KAYAK')).toBe(0);
    expect(minDeletionToMakeItPalindrome('aebcbda')).toBe(2);
  });
  it('finds if string x is present in string y', () => {
    expect(seqPatternMatching('ace', 'abcde')).toBeTruthy();
    expect(seqPatternMatching('axy', 'adxcpy')).toBeTruthy();
  });
});
