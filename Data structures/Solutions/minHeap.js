class MinHeap {
  constructor() {
    this.data = [];
  }

  siftUp(index) {
    while (index > 0) {
      const parent = Math.round((index - 1) / 2);
      if (this.data[parent] > this.data[index]) {
        [this.data[index], this.data[parent]] = [
          this.data[parent],
          this.data[index]
        ];
      }
      index = parent;
    }
  }

  extractMin(elem) {
    const max = this.data[0];
    this.data[0] = this.data.pop();
    this.siftDown(0);
    return max;
  }

  insert(elem) {
    this.data.push(elem);
    this.siftUp(this.data.length - 1);
  }

  siftDown(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;
    if (left < this.data.length && this.data[left] < this.data[smallest]) {
      smallest = left;
    }
    if (right < this.data.length && this.data[right] < this.data[smallest]) {
      smallest = right;
    }
    if (index !== smallest) {
      [this.data[index], this.data[smallest]] = [
        this.data[smallest],
        this.data[index]
      ];
      this.siftDown(smallest);
    }
  }
}
