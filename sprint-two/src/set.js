var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage[item]) {
    this._storage[item] = true;
  }
};

setPrototype.contains = function(item) {
  if(this._storage[item]) {
    return true;
  } 
  
  return false;
};

setPrototype.remove = function(item) {
  if (this._storage[item]) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * The time complexity for the set is O(1) for insertion, deletion and lookup
 * time.
 */
