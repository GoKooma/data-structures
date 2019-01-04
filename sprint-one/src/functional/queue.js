var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter += 1;
  };

  someInstance.dequeue = function() {
    if (counter > 0) {
      let temp = storage[0];
      delete storage[0];
      for (let key in storage) {
        if (storage[key + 1]) {
          console.log(storage[key]);
          storage[key] = storage[key + 1];
        }
      }
      counter -= 1;
      return temp;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
