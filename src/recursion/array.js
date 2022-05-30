export function insertInSorted(arr, el) {
  /**
   * ===base condition
   * arr.length === 0
   * arr.push(el)
   * ===hypothesis
   * var last = arr.pop();
   * insertInSorted(arr, el)
   *
   * ===induction
   * [...insertInSorted(reduced), last]
   *
   */

  if (arr.length === 0 || arr[arr.length - 1] < el) {
    arr.push(el);
    return arr;
  }

  var last = arr.pop();

  return [...insertInSorted(arr, el), last];
}

export function sortByRecursion(arr) {
  /**
   * ===base case
   * if(arr.length === 1) return arr;
   * ===hypothesis
   * var last = arr.pop();
   * sortByRecursion(arr)
   *
   * ===induction
   * insertInSorted(arr, last)
   */
  if (arr.length === 1) {
    return arr;
  }

  var last = arr.pop();
  var sortedArray = insertInSorted(sortByRecursion(arr), last);

  return sortedArray;
}
