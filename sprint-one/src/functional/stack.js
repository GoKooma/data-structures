var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter += 1;
  };

  someInstance.pop = function() {
    if (counter > 0) {
      counter -= 1;
    let temp = storage[counter];
    delete storage[counter];
    return temp;
    }
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
