/**
 * Problem statement
 *
 * Given 2 strings x and y of arbitrary length, count the number of longest common subsequence
 *
 * example:
 * input
 *  x = abcdef
 *  y = abdfghr
 * output
 *  4
 *
 */

export function lcsRecursive(x, y, n = x.length, m = y.length) {
  /**
   * Base condition
   *  smallest valid input for x or y is n === 0 or m === 0
   * Choice Diagram
   *  if x[n-1] === y[m-1]
   *  else
   *    Math.max(lcsRecursive(x,y,n-1, m),lcsRecursive(x,y,n, m-1))
   * Smaller input
   *  lcsRecursive(x,y,n-1,m) or lcsRecursive(x,y,n, m-1)
   */

  if (n === 0 || m === 0) {
    return 0;
  }

  if (x[n - 1] === y[m - 1]) {
    return 1 + lcsRecursive(x, y, n - 1, m - 1);
  } else {
    return Math.max(lcsRecursive(x, y, n - 1, m), lcsRecursive(x, y, n, m - 1));
  }
}

export function lcsMemoized(x, y, n = x.length, m = y.length) {
  const t = Array.from(Array(n + 1), () => Array(m + 1));
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      t[i][j] = -1;
    }
  }

  lcs(x, y, n, m);
  return t[n][m];

  function lcs(x, y, n, m) {
    if (n === 0 || m === 0) {
      return 0;
    }

    if (t[n][m] !== -1) {
      return t[n][m];
    }
    if (x[n - 1] === y[m - 1]) {
      t[n][m] = 1 + lcs(x, y, n - 1, m - 1);
    } else {
      t[n][m] = Math.max(lcs(x, y, n - 1, m), lcs(x, y, n, m - 1));
    }
    return t[n][m];
  }
}

export function lcsTopDown(x, y, n = x.length, m = y.length) {
  /**
   * matrix creation
   * initialization
   * iteration
   * answer
   */

  // matrix creation
  const t = Array.from(Array(n + 1), () => Array(m + 1));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0 || j === 0) {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (x[i - 1] === y[j - 1]) {
        t[i][j] = 1 + t[i - 1][j - 1];
      } else {
        t[i][j] = Math.max(t[i - 1][j], t[i][j - 1]);
      }
    }
  }
  return t[n][m];
}

export function longestCommonSubstring(x, y, n = x.length, m = y.length) {
  /**
   * matrix creation
   * initialization
   * iteration
   * answer
   */
  let max = Number.NEGATIVE_INFINITY;
  // matrix creation
  const t = Array.from(Array(n + 1), () => Array(m + 1));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0 || j === 0) {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (x[i - 1] === y[j - 1]) {
        t[i][j] = 1 + t[i - 1][j - 1];
        max = Math.max(max, t[i][j]);
      } else {
        t[i][j] = 0;
      }
    }
  }
  return max;
}

export function printLongestCommonSequence(x, y, n = x.length, m = y.length) {
  const t = Array.from(Array(n + 1), () => Array(m + 1));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0 || j === 0) {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (x[i - 1] === y[j - 1]) {
        t[i][j] = 1 + t[i - 1][j - 1];
      } else {
        t[i][j] = Math.max(t[i - 1][j], t[i][j - 1]);
      }
    }
  }

  let i = n,
    j = m,
    result = '';

  while (i > 0 && j > 0) {
    if (x[i - 1] === y[j - 1]) {
      result += x[i - 1];
      i--;
      j--;
    } else {
      if (t[i - 1][j] > t[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
  }
  return Array.from(result).reverse().join('');
}

/**
 * Problem statement
 * Given two strings str1 and str2, 
 * the task is to find the length of the shortest string 
 * that has both str1 and str2 as subsequences.
 * 
Input:   str1 = "geek",  str2 = "eke"
Output: 5

Explanation: 
String "geeke" has both string "geek" 
and "eke" as subsequences.

Input:   str1 = "AGGTAB",  str2 = "GXTXAYB"
Output:  9
Explanation: 
String "AGXGTXAYB" has both string 
"AGGTAB" and "GXTXAYB" as subsequences.
 */
export function shortestCommonSuperSequenceLength(
  x,
  y,
  n = x.length,
  m = y.length
) {
  /**
   * length(scs) = (n + m) - lcs(x,y)
   *
   *
   */

  const lcs = lcsTopDown(x, y);

  return n + m - lcs;
}

/**
 * Problem statement
 *
 * Given two strings X and Y,
 * print the shortest string that has both X and Y as subsequences. If multiple shortest super-sequence exists,
 * print any one of them.
 * 
 * 
Input: X = "AGGTAB",  Y = "GXTXAYB"
Output: "AGXGTXAYB" OR "AGGXTXAYB" 

Input: X = "HELLO",  Y = "GEEK"
Output: "GEHEKLLO" OR "GHEEKLLO"
 */

export function printSCS(x, y, n = x.length, m = y.length) {
  const t = Array.from(Array(n + 1), () => Array(m + 1));

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (i === 0 || j === 0) {
        t[i][j] = 0;
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (x[i - 1] === y[j - 1]) {
        t[i][j] = 1 + t[i - 1][j - 1];
      } else {
        t[i][j] = Math.max(t[i - 1][j], t[i][j - 1]);
      }
    }
  }

  let i = n,
    j = m,
    result = '';

  while (i > 0 && j > 0) {
    if (x[i - 1] === y[j - 1]) {
      result += x[i - 1];
      i--;
      j--;
    } else {
      if (t[i - 1][j] > t[i][j - 1]) {
        result += x[i - 1];
        i--;
      } else {
        result += y[j - 1];
        j--;
      }
    }
  }
  while (i > 0) {
    result += x[i - 1];
    i--;
  }
  while (j > 0) {
    result += y[j - 1];
    j--;
  }
  return Array.from(result).reverse().join('');
}

/**
 * Problem statement
 Minimum number of deletions and insertions to transform one string into another
Given two strings ‘str1’ and ‘str2’ of size m and n respectively. The task is to remove/delete and insert minimum number of characters from/in str1 so as to transform it into str2. It could be possible that the same character needs to be removed/deleted from one point of str1 and inserted to some another point.
Example:
Input : str1 = "geeksforgeeks", str2 = "geeks"
Output : Minimum Deletion = 8
         Minimum Insertion = 0 
 */

export function minNumberOfDeletionAndInsertion(
  x,
  y,
  n = x.length,
  m = y.length
) {
  /**
   * minDeletion = n- lcs
   * minInsertion = m - lcs
   */

  const lcs = lcsTopDown(x, y);
  return [n - lcs, m - lcs];
}

/**
 * Palindromic subsequence:
 * Palindromic subsequence is a lcs which is also a palindrome
 * 
Given a sequence, find the length of the longest palindromic subsequence in it.
Example :
Input:"METER"
Longest palindromic subsequece is ETE
Output:3
 */
export function lps(x, y = Array.from(x).reverse().join('')) {
  /**
   * lps = lcs(x, reverse(x))
   */

  return lcsTopDown(x, y);
}

/**
Minimum number of deletions to make a string palindrome
Given a string of size ‘n’. 
The task is to remove or delete minimum number of characters from the string
so that the resultant string is palindrome.
Examples :

Input : aebcbda
Output : 2
Remove characters 'e' and 'd'
Resultant string will be 'abcba'
which is a palindromic string
 */
export function minDeletionToMakeItPalindrome(x) {
  return x.length - lps(x);
}

/**
 * 
Given two strings s and t,
return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed
from the original string by deleting some (can be none) of the characters
without disturbing the relative positions of the remaining characters.
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
 */

export function seqPatternMatching(x, y) {
  return lcsTopDown(x, y) === x.length;
}
