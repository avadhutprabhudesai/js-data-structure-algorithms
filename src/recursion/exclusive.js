/**
 * 
 We build a table of n rows (1-indexed).
 We start by writing 0 in the 1st row.
 Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.



n = 1     0
n = 2     0 1
n = 3     0 1 1 0
n = 4     0 1 1 0 1 0 0 1


Input: n = 1, k = 1
Output: 0
Explanation: row 1: 0


Input: n = 2, k = 1
Output: 0
Explanation: 
row 1: 0
row 2: 01


Input: n = 2, k = 2
Output: 1
Explanation: 
row 1: 0
row 2: 01
 */

export function kthSymbol(n, k) {
  /**
   * ===base condition
   * if n=1, k= 1 return 0
   * ===hypothesis
   * if k <= mid kthSymbol(n-1, k)
   * if k > mid kthSymbol(n-1, k-mid)
   * ===induction
   * if k <= mid, return kthSymbol(n-1, k)
   * if k > mid, return !kthSymbol(n-1, k-mid)
   */

  const length = Math.pow(2, n - 1);
  const mid = Math.floor(length / 2);

  if (k < 1 || k > length) {
    return null;
  }
  if (n === 1 && k === 1) {
    return 0;
  }

  if (k <= mid) {
    return kthSymbol(n - 1, k);
  } else {
    return Number(!kthSymbol(n - 1, k - mid));
  }
}

export function towerOfHanoi(s, d, h, n) {
  /**
   * ===base condition
   * if n === 1 print moving plate n from s to d
   * ===hypothesis
   * move n-1 plates to helper
   * ===induction
   * move last plate to destination
   * move remaining plates to destination
   */
  if (n === 1) {
    console.log(`moving plate ${n} from ${s} to ${d}`);
    return;
  }
  towerOfHanoi(s, h, d, n - 1);
  console.log(`moving plate ${n} from ${s} to ${d}`);
  towerOfHanoi(h, d, s, n - 1);
  return;
}

export function generateValidParenthesis(open, close = open, output = '') {
  /**
   * ===base condition
   * if open and close are 0, print output
   * ===condition to print opening brackets
   * if open > 0
   * ===condition to print closing brackets
   * if close > 0 and close > open
   */

  if (open === 0 && close === 0) {
    console.log(output);
    return;
  }

  if (output === '') {
    output = '(';
    generateValidParenthesis(open - 1, close, output);
    return;
  }

  let op1 = output + '(',
    op2 = output + ')';
  if (open > 0) {
    generateValidParenthesis(open - 1, close, op1);
  }
  if (close > 0 && close > open) {
    generateValidParenthesis(open, close - 1, op2);
  }
  return;
}

/**
 * n = length of binary numbers
 * output
 * All binary combinations where all prefixes of a number has more 1's than 0's
 * Prefix of a binary number:
 * For binary number 110, prefixes are
 * 110
 * 11
 * 1
 *
 * base condition
 * when n === 0, print the number
 *
 * condition to add 1 to output
 * when n > 0
 *
 * condition to add 0 to output
 * when n > 0 && ones > zeros
 *
 */
export function printBinaryNumbersWithPrefixCondition(
  n,
  output = '',
  ones = 0,
  zeros = 0
) {
  if (n === 0) {
    console.log(output);
    return;
  }

  let op1 = output + '0',
    op2 = output + '1';

  printBinaryNumbersWithPrefixCondition(n - 1, op2, ones + 1, zeros);
  if (ones > zeros) {
    printBinaryNumbersWithPrefixCondition(n - 1, op1, ones, zeros + 1);
  }
  return;
}

export function josephusCircle(arr, current, k) {
  /**
   * ===base condition
   * arr.length === 1 return arr[0]
   * ===hypothesis
   * josephusCircle(reduced array, k)
   * ===induction
   * arr.splice((current + k) % arr.length);
   */

  if (arr.length === 1) {
    return arr[0];
  }

  const swordIndex = (current + k) % arr.length;
  arr.splice(swordIndex, 1);
  const alive = josephusCircle(arr, swordIndex, k);
  return alive;
}
