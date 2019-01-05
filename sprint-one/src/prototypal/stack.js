var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.counter = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter += 1;
}

stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter -= 1;
    let temp = this.storage[this.counter];
    delete this.storage[this.counter];
    return temp;
  }
}

stackMethods.size = function() {
  return this.counter;
}
