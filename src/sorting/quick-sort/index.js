const partition = (arr, start, end) => {
  let pivot = arr[end],
    pIndex = start;

  for (let i = start; i <= end - 1; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, pIndex);
      pIndex++;
    }
  }
  swap(arr, end, pIndex);

  return pIndex;
};

const swap = (arr, a, b) => {
  if (a === b) return;
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const quickSort = (arr, start, end) => {
  if (start >= end) return;
  let index = partition(arr, start, end);

  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);

  return arr;
};

export default quickSort;
