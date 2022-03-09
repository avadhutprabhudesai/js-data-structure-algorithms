class BinaryHeap {
  constructor() {
    this.data = [0];
  }

  delMax() {
    let i = 1;
    this.data[i] = this.data.pop();
    while (i <= this.data.length) {
      let node = this.data[i],
        lc = this.getLeftChild(i),
        rc = this.getRightChild(i);

      if (lc > node && (rc == null || lc >= rc)) {
        let lci = 2 * i;
        this.data[i] = lc;
        this.data[lci] = node;
        i = lci;
      } else if (rc > node && (lc == null || rc >= lc)) {
        let rci = 2 * i + 1;
        this.data[i] = rc;
        this.data[rci] = node;
        i = rci;
      } else if (lc > node && rc > node) {
        let swi = lc >= rc ? 2 * i : 2 * i + 1;
        this.data[i] = this.data[swi];
        this.data[swi] = node;
        i = swi;
      } else {
        break;
      }
      node = this.data[i];
    }
  }

  insert = (value) => {
    this.data.push(value);
    if (this.data.length === 2) return;

    let i = this.data.length - 1,
      parent = Math.floor(i / 2);
    while (parent > 0) {
      if (this.data[i] > this.data[parent]) {
        let temp = this.data[parent];
        this.data[parent] = this.data[i];
        this.data[i] = temp;
        i = parent;
        parent = Math.floor(i / 2);
      } else return;
    }
  };
  getRoot() {
    if (this.data.length === 1) return null;
    return this.data[1];
  }
  getLeftChild(index) {
    let lci = 2 * index;
    if (lci < this.data.length) {
      return this.data[lci];
    }
  }
  getRightChild(index) {
    let rci = 2 * index + 1;
    if (rci < this.data.length) {
      return this.data[rci];
    }
  }
  getParent(index) {
    let parent = Math.floor(index / 2);
    if (parent > 0) {
      return this.data[parent];
    }
  }
  getHeap() {
    return this.data.join(' --> ');
  }
}

export default BinaryHeap;
