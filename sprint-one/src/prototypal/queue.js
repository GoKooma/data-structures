var Queue = function() {
  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  newInstance.counter = 0;

  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
}

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    let temp = this.storage[0];
    delete this.storage[0];
    for (let i = 0; i < this.counter; i++) {
      if (this.storage[i + 1]) {
        this.storage[i] = this.storage[i + 1]
      }
    }
    this.counter -= 1;
    return temp;
  }
}

queueMethods.size = function() {
  return this.counter;
}
