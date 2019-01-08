

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    let newBucket = [[k,v]];
    this._storage.set(index, newBucket);
  } else {
    let bucket = this._storage.get(index);
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i].splice(1, 1, v);
        this._storage.set(index, bucket);
      }
    }
    bucket.push([k,v]);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket.length > 0) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * The hashTable will always have constant time complexity of O(1) if no collisions
 * occur. But if there happens a collision, retrieve function will have 
 * time complexity of O(n) since it will have to search all elements in 
 * the bucket to find target value in the worst case.
 */


