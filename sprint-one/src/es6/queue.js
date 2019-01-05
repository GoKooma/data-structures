class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter += 1;
  }

  dequeue() {
    if (this.counter > 0) {
      let temp = this.storage[0];
      delete this.storage[0];
      for (let i = 0; i < this.counter; i++) {
        this.storage[i] = this.storage[i + 1];
      }
      this.counter -= 1;
      return temp;
    }
  }

  size() {
    return this.counter;
  }
}
