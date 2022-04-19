class MyArray {
  length = 0;
  data = {};

  constructor(...args) {
    args.forEach((a, i) => {
      this.data[i] = a;
    });
    this.length = args.length;
  }

  push(el) {
    if (el != null) {
      this.data[this.length] = el;
      this.length++;
    }
  }

  get(index) {
    if (index < this.length) {
      return this.data[index];
    }
  }

  pop() {
    const result = this.data[this.length - 1];
    delete this.data[--this.length];
    return result;
  }

  insert(index, element) {
    if (index >= 0 && index < this.length) {
      for (let i = this.length; i > index; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[index] = element;
      this.length++;
    }
  }

  delete(index) {
    if (index >= 0 && index < this.length) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
  }
}

export default MyArray;
