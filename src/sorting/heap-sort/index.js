class MaxHeap {
  constructor(arr) {
    this.heap = [0];
    if (arr?.length) {
      this.heap = [...this.heap, ...arr];
    }
  }

  insert(val) {
    this.heap.push(val);
    if (this.heap.length === 2) {
      return;
    }
    let i = this.heap.length - 1;
    while (i > 1) {
      let child = i;
      let parent = Math.floor(i / 2);
      if (this.heap[child] > this.heap[parent]) {
        let temp = this.heap[parent];
        this.heap[parent] = this.heap[child];
        this.heap[child] = temp;
        i = parent;
      } else {
        break;
      }
    }
  }

  print() {
    return this.heap.slice(1);
  }

  maxHeapify(i) {
    let left = 2 * i,
      right = 2 * i + 1,
      largest = i;
    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== i) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[largest];
      this.heap[largest] = temp;
      this.maxHeapify(largest);
    }
  }

  buildMaxHeap() {
    for (let i = Math.floor(this.heap.length / 2); i > 0; i--) {
      this.maxHeapify(i);
    }
  }

  delete() {
    if (this.heap.length === 1) return;
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    let i = 1,
      root = this.heap[i];
    this.heap[i] = this.heap.pop();
    while (i < this.heap.length) {
      let left = 2 * i,
        right = left + 1,
        largest = i;
      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }
      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }
      if (largest !== i) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[largest];
        this.heap[largest] = temp;
        i = largest;
      } else {
        break;
      }
    }

    return root;
  }

  sort() {
    let temp = [];
    let length = this.heap.length;
    for (let i = 1; i < length; i++) {
      temp.push(this.delete());
    }
    return temp;
  }
}

export default MaxHeap;
