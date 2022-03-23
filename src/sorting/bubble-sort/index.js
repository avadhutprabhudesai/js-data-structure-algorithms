function bubbleSort(arr) {
  let swap = true;
  for (let i = 0; i < arr.length; i++) {
    if (!swap) {
      return arr;
    }
    console.log('iteration', i);
    swap = false;
    for (let j = 0; j < arr.length - i; j++) {
      console.log('value of j', j);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
  }
  return arr;
}

export default bubbleSort;
