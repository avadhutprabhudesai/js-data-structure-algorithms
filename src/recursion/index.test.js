import { insertInSorted, sortByRecursion } from './array';
import {
  generateValidParenthesis,
  josephusCircle,
  kthSymbol,
  printBinaryNumbersWithPrefixCondition,
  towerOfHanoi,
} from './exclusive';
import {
  decimalToBinary,
  factorial,
  isEven,
  powerOf2,
  powerOf3,
  printNum,
  sumOfAll,
} from './math';
import {
  findAllInterleavings,
  isPalindrome,
  lengthOfString,
  letterCasePermutation,
  numberOfVowels,
  permutationWithCaseChange,
  permutationWithFillerChar,
  printSubsets,
  printUniqueSubsets,
  removeDuplicates,
  removeSpaces,
  reverse,
  sumOfDigits,
  uppercase,
} from './string';

describe('Testing array recursion', () => {
  it('inserts given element at proper position in sorted array', () => {
    expect(insertInSorted([1, 2, 5], 3)).toEqual([1, 2, 3, 5]);
    expect(insertInSorted([1, 2, 5], 0)).toEqual([0, 1, 2, 5]);
  });
  it('sorts an array by recursion', () => {
    expect(sortByRecursion([3, 2, 1])).toEqual([1, 2, 3]);
  });
});

describe('Testing math recursion', () => {
  it('prints all numbers from 0 to given number', () => {
    printNum(5);
  });
  it('sums all numbers from 0 to given number', () => {
    expect(sumOfAll(5)).toBe(15);
    expect(sumOfAll(10)).toBe(55);
  });
  it('checks if a given number is even', () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(14)).toBe(true);
  });
  it('calculates the factorial of a given number', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(3)).toBe(6);
    expect(factorial(10)).toBe(3628800);
  });
  it('converts decimal to binary', () => {
    expect(decimalToBinary(13)).toBe('1101');
    expect(decimalToBinary(2)).toBe('10');
    expect(decimalToBinary(10)).toBe('1010');
  });
  it('checks if a number is a power of 2', () => {
    expect(powerOf2(8)).toBe(true);
    expect(powerOf2(6)).toBe(false);
    expect(powerOf2(16)).toBe(true);
  });
  it('checks if a number is a power of 3', () => {
    expect(powerOf3(9)).toBe(true);
    expect(powerOf3(6)).toBe(false);
    expect(powerOf3(27)).toBe(true);
  });
});

describe('Testing String recursion', () => {
  it('converts a string into uppercase', () => {
    expect(uppercase('hello')).toBe('HELLO');
  });
  it('reverses a given string', () => {
    expect(reverse('hello')).toBe('olleh');
  });
  it('checks if a given string is a palindrome', () => {
    expect(isPalindrome('kayak')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('john')).toBe(false);
  });
  it('calculates length of the given string', () => {
    expect(lengthOfString('hello')).toBe(5);
    expect(lengthOfString('avadhut')).toBe(7);
  });
  it('calculates sum of all digits of a given string', () => {
    expect(sumOfDigits('1234')).toBe(10);
    expect(sumOfDigits('555')).toBe(15);
  });
  it('removes duplicates from a string', () => {
    expect(removeDuplicates('abbccd', '')).toBe('abcd');
    expect(removeDuplicates('aaaaa', '')).toBe('a');
    expect(removeDuplicates('avadhut', '')).toBe('avdhut');
  });
  it('removes spaces from a string', () => {
    expect(removeSpaces('a   v a  d hut   ', '')).toBe('avadhut');
    expect(removeSpaces('a    a', '')).toBe('aa');
    expect(removeSpaces('      john', '')).toBe('john');
  });
  it('count vowels in the string', () => {
    expect(numberOfVowels('avadhut', 0)).toBe(3);
    expect(numberOfVowels('trrr', 0)).toBe(0);
    expect(numberOfVowels('wowie', 0)).toBe(3);
  });

  it('prints all subsets of a string', () => {
    expect(printSubsets('abc', '')).toBeUndefined();
    expect(printSubsets('aab', '')).toBeUndefined();
  });
  it('prints all unique subsets of a string', () => {
    expect(printUniqueSubsets('aab', '')).toBeUndefined();
  });
  it('prints all permutations with spaces', () => {
    permutationWithFillerChar('ab');
    permutationWithFillerChar('abc');
  });
  it('prints all permutations with case change', () => {
    permutationWithCaseChange('ab');
    permutationWithCaseChange('abc');
  });
  it('prints all letter case permutations', () => {
    letterCasePermutation('a1B2');
  });
  it('finds all interleavings of given 2 strings', () => {
    const set = findAllInterleavings('ABC', 'ACB');
    set.forEach((val) => console.log(val));
  });
});

describe('Testing exclusive problems', () => {
  it('find kth symbol in the grammar', () => {
    expect(kthSymbol(1, 1)).toBe(0);
    expect(kthSymbol(2, 1)).toBe(0);
    expect(kthSymbol(2, 2)).toBe(1);
    expect(kthSymbol(3, 1)).toBe(0);
    expect(kthSymbol(3, 2)).toBe(1);
    expect(kthSymbol(3, 3)).toBe(1);
    expect(kthSymbol(3, 4)).toBe(0);
    expect(kthSymbol(4, 1)).toBe(0);
    expect(kthSymbol(4, 2)).toBe(1);
    expect(kthSymbol(4, 3)).toBe(1);
    expect(kthSymbol(4, 4)).toBe(0);
    expect(kthSymbol(4, 5)).toBe(1);
    expect(kthSymbol(4, 6)).toBe(0);

    expect(kthSymbol(1, 2)).toBe(null);
  });

  it('tests tower of hanoi', () => {
    towerOfHanoi('source', 'destination', 'helper', 3);
  });
  it('generates valid parenthesis', () => {
    generateValidParenthesis(4);
  });
  it('prints binary numbers where all prefixes have more 1s than 0s', () => {
    printBinaryNumbersWithPrefixCondition(3);
  });
  it('returns the man who survived josephus circle of death', () => {
    expect(josephusCircle([1, 2, 3, 4, 5], 0, 2)).toBe(4);
  });
});
