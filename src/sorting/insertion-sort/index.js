export const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let swapIdx, swapItem;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        swapIdx = j;
      }
    }
    if (swapIdx != null) {
      swapItem = arr[i];
      for (let k = i; k > swapIdx; k--) {
        arr[k] = arr[k - 1];
      }
      arr[swapIdx] = swapItem;
    }
  }
  return arr;
};
