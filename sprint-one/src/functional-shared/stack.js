var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not to reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.counter = 0;
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter += 1;
  },

  size: function() {
    return this.counter;
  },

  pop: function() {
    if (this.counter > 0) {
      this.counter -= 1;
      let temp = this.storage[this.counter];
      delete this.storage[this.counter];
      return temp;
    }
  }
};

// stackMethods.push = function(value) {
//   this.storage[counter] = value;
//   this.storage.counter += 1;
//   return this.storage;
// }

// stackMethods.size = function() {
//   return this.counter;
// }


