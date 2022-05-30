export function uppercase(str) {
  /**
   * ===base condition
   * if(str === '') return '';
   * ===hypothesis
   * call uppercase(str.slice(1))
   * ===induction
   * str[0].toUpperCase() + upperCase(str.slice(1))
   */

  if (str === '') return str;

  return str[0].toUpperCase() + uppercase(str.slice(1));
}

export function reverse(str) {
  /**
   * ===base condition
   * if(str === '') return ''
   * ===hypothesis
   * call reverse(str.slice(1))
   * ===induction
   * reverse(str.slice(1)) + str[0]
   */

  if (str === '') return str;

  return reverse(str.slice(1)) + str[0];
}

export function isPalindrome(str) {
  /**
   * ===base condition
   * if str.length === 1 return true;
   * ===hypothesis
   * isPalindrome(str.slice(1, str.length - 1))
   * ===induction
   * str[0] === str[str.length - 1] && smaller input
   */
  if (str.length === 1) {
    return true;
  }

  return (
    str[0] === str[str.length - 1] && isPalindrome(str.slice(1, str.length - 1))
  );
}

export function lengthOfString(str) {
  /**
   * ===base condition
   * if(str==='') return 0;
   * ===hypothesis
   * lengthOfString(str.slice(1))
   * ===induction
   * 1 + hypothesis
   */
  if (str === '') return 0;
  return 1 + lengthOfString(str.slice(1));
}

export function sumOfDigits(str) {
  /**
   * ===base condition
   * str === '' return 0
   * ===hypothesis
   * sumOfDigits(str.slice(1))
   * ===induction
   * parseInt(str[0]) + hypothesis
   */
  if (str === '') return 0;
  return parseInt(str[0]) + sumOfDigits(str.slice(1));
}

export function removeDuplicates(str) {
  /**
   * ===base condition
   * if(str === '') return str
   * ===hypothesis
   * const strArr = Array.from(str);
   * const last = strArr.pop()
   * const rest = removeDuplicates(strArr)
   * ===induction
   * if(rest.includes(last)) return rest.join('') else return (rest.push(last)).join('')
   */
  if (str.length === 1) return str;
  const strArr = Array.from(str);

  const last = strArr.pop();
  let rest = removeDuplicates(strArr.join(''));

  if (!rest.includes(last)) {
    rest = rest.concat(last);
  }
  return rest;
}

export function removeSpaces(str) {
  /**
   * ===base condition
   * str === '' return str;
   * ===hypothesis
   * remove first element and removeSpaces(str.slice(1))
   * ===induction
   * if first is whitespace then do not prepend else prepend
   */

  if (str === '') return str;

  const first = str[0];
  const rest = removeSpaces(str.slice(1));

  if (/\s/.test(first)) {
    return rest;
  } else {
    return first + rest;
  }
}

export function numberOfVowels(str) {
  /**
   * ===base condition
   * if str === '' then return
   * ===hypothesis
   * remove first and call numberOfVowels(remaining)
   * ===induction
   * if first vowel then add 1 else return;
   */
  if (str === '') return 0;

  const first = str[0];
  const rest = numberOfVowels(str.slice(1));

  return Number(['a', 'e', 'i', 'o', 'u'].includes(first)) + rest;
}

/**
 * For given input, print all subsets that can be formed using individual characters
 *
 * example 1, input = 'ab', output will be
 * ''
 * a
 * b
 * ab
 *
 *
 * example 2 input = 'abc', output will be
 * ''
 * a
 * b
 * c
 * ab
 * ac
 * bc
 * abc
 */
export function printSubsets(input, output) {
  /**
   * === base condition
   * whenever ip is empty we get an output
   */
  if (input === '') {
    return;
  }
  let op1 = output,
    op2 = output + input[0];

  printSubsets(input.slice(1), op1);
  printSubsets(input.slice(1), op2);

  return;
}

export function printUniqueSubsets(input, output) {
  /**
   * === base condition
   * whenever ip is empty we get an output
   */

  function printAll(input, output, set) {
    if (input === '') {
      set.add(output);
      return;
    }
    let op1 = output,
      op2 = output + input[0];

    printAll(input.slice(1), op1, set);
    printAll(input.slice(1), op2, set);

    return set;
  }
  const set = new Set();
  printAll(input, output, set);
  return;
}

/**
 * Print all permutations of a string by adding space within word boundary
 *
 * example 1 for input = 'abc', output will be
 * a_b_c
 * a_bc
 * ab_c
 * abc
 *
 * leading and trailing spaces should be ignored.
 */

export function permutationWithFillerChar(input, output = '') {
  //===base condition
  // whenever input is empty, print output
  if (input === '') {
    console.log(output);
    return;
  }

  let op1 = output + input[0];
  let op2;
  if (output === '') {
    permutationWithFillerChar(input.slice(1), op1);
    return;
  } else {
    op2 = output + '_' + input[0];
  }

  permutationWithFillerChar(input.slice(1), op1);
  permutationWithFillerChar(input.slice(1), op2);
  return;
}

/**
 * Print all permutations by changing the case of individual character in given string
 * assumptions
 * inputs are all smaller case alphabets
 *
 * example 1
 * input ab
 * output
 * ab
 * Ab
 * aB
 * AB
 *
 * example 2
 * input abc
 * output
 * abc
 * aBc
 * abC
 * Abc
 * AbC
 * ABc
 * aBC
 * ABC
 */

export function permutationWithCaseChange(input, output = '') {
  /**
   * ===base condition
   * input === ''
   */
  if (input.length === 0) {
    console.log(output);
    return;
  }

  let op1 = output + input[0];
  let op2 = output + input[0].toUpperCase();
  permutationWithCaseChange(input.slice(1), op1);
  permutationWithCaseChange(input.slice(1), op2);
  return;
}

/**
 * same as permutationWithCaseChange but here input can contain digits
 * and input may have capital case alphabets
 *
 * input a1B2
 * output
 * a1b2
 * a1B2
 * A1b2
 * A1B2
 */

export function letterCasePermutation(input, output = '') {
  /**
   * ===base condition
   * input is empty, then print output and return
   */
  if (input === '') {
    console.log(output);
    return;
  }

  // if next input is a digit, there is no decision to make.
  // append it to the output and move on to next slice of input
  if (isFinite(input[0])) {
    output += input[0];
    letterCasePermutation(input.slice(1), output);
    return;
  }

  let op1 = output + input[0].toLowerCase(),
    op2 = output + input[0].toUpperCase();

  letterCasePermutation(input.slice(1), op1);
  letterCasePermutation(input.slice(1), op2);
  return;
}

export function findAllInterleavings(str1, str2, output = '', set = new Set()) {
  /**
   * ===base condition
   * if(str1.length === 0 && str2.length === 0)
   *  set.add(output)
   *
   */

  if (str1.length === 0 && str2.length === 0) {
    set.add(output);
    return;
  }

  let op1 = output,
    op2 = output;
  if (str1.length > 0) {
    op1 += str1[0];
    findAllInterleavings(str1.slice(1), str2, op1, set);
  }
  if (str2.length > 0) {
    op2 += str2[0];
    findAllInterleavings(str1, str2.slice(1), op2, set);
  }
  return set;
}
