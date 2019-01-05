var Queue = function() {
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
}

Queue.prototype.dequeue = function() {
  if (this.counter > 0) {
    let temp = this.storage[0];
    delete this.storage[0];
    for (let i = 0; i < this.counter; i++) {
      if (this.storage[i + 1]) {
        this.storage[i] = this.storage[i + 1];
      }
    }
    this.counter -= 1;
    return temp;
  }
}

Queue.prototype.size = function() {
  return this.counter;
}