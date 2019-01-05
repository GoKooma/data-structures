var Stack = function() {
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
}

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    this.counter -= 1;
    let temp = this.storage[this.counter];
    delete this.storage[this.counter];
    return temp;
  }
}

Stack.prototype.size = function() {
  return this.counter;
}