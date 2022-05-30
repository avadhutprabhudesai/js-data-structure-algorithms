export function printNum(num, current = num) {
  /**
   * ===base case
   * current === 0 log and return
   * ===hypothesis
   * printNum(num, current - 1)
   * ===induction
   * log num - current
   */
  if (current < 0) {
    return;
  }

  console.log(num - current);
  printNum(num, current - 1);
}

export function sumOfAll(num) {
  /**
   * ===base case
   * if(num === 0) return num
   * ===hypothesis
   * sumOfAll(num - 1)
   * ===induction
   * num + hypothesis
   */
  if (num === 0) return num;
  return num + sumOfAll(num - 1);
}

export function isEven(num) {
  /**
   * ===base case
   * if(num === 0) return true
   * if(num === 1) return false
   * ===hypothesis
   * isEven(num - 2)
   * isEven(quotient)
   * ===induction
   * true && hypothesis
   */
  if (num === 0) return true;
  if (num === 1) return false;

  return true && isEven(num - 2);
}

export function factorial(num) {
  /**
   * ===base case
   * num === 1 return num
   * ===hypothesis
   * factorial(num - 1)
   * ===induction
   * num * hypothesis
   */
  if (num === 1) return num;
  return num * factorial(num - 1);
}

export function decimalToBinary(num) {
  /**
   * ===base case
   * num === 0 return ''
   * ===hypothesis
   * quotient = num / 2
   * remainder = num % 2
   * decimalToBinary(quotient)
   * ===induction
   * hypothesis + remainder.toString()
   */
  if (num === 0) return '';
  const quotient = Math.floor(num / 2);
  const remainder = num % 2;

  return decimalToBinary(quotient) + String(remainder);
}

export function powerOf2(num) {
  /**
   * ===base case
   * if(num === 0) return true;
   * ===hypothesis
   * remainder = num %2;
   * powerOf2(Math.floor(num / 2))
   * ===induction
   * !Boolean(remainder) && hypothesis
   *
   */
  if (num === 1) {
    return true;
  }

  const remainder = num % 2;

  return !remainder && powerOf2(Math.floor(num / 2));
}

export function powerOf3(num) {
  /**
   * ===base case
   * if(num === 0) return true;
   * ===hypothesis
   * remainder = num % 3;
   * powerOf2(Math.floor(num / 3))
   * ===induction
   * !Boolean(remainder) && hypothesis
   *
   */
  if (num === 1) {
    return true;
  }

  const remainder = num % 3;

  return !remainder && powerOf3(Math.floor(num / 3));
}
