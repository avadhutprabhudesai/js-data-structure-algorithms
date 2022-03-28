export const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor((1 + arr.length) / 2),
    h = arr.length;

  let left = arr.slice(0, mid),
    right = arr.slice(mid, h);
  return sortAndMerge(mergeSort(left), mergeSort(right));
};

function sortAndMerge(a, b) {
  let temp = [],
    i = 0,
    j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      temp.push(a[i++]);
    } else if (b[j] < a[i]) {
      temp.push(b[j++]);
    } else {
      temp.push(a[i++]);
      temp.push(b[j++]);
    }
  }
  if (i !== a.length) {
    temp.push(...a.slice(i, a.length));
  }
  if (j !== b.length) {
    temp.push(...b.slice(j, b.length));
  }

  return temp;
}
