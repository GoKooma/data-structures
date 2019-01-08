

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.rehash = function() {
  

}

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this.size + 1 > (this._limit * 3 / 4)) {
    this.size = 0;
    this._limit *= 2;
    let hashTable = this;
    // console.log(this);
    let tempStorage = this._storage;
    this._storage = LimitedArray(this._limit);
  
    tempStorage.each(function(item, i, storage) {
      if (item !== undefined) {
        for (let i = 0; i < item.length; i++) {
          hashTable.insert(item[i][0], item[i][1]);
        }
      }
    });

    // this.rehash();
  }
  if (this._storage.get(index) === undefined) {
    let newBucket = [[k,v]];
    this._storage.set(index, newBucket);
    this.size += 1;
  } else {
    let bucket = this._storage.get(index);
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i].splice(1, 1, v);
        this._storage.set(index, bucket);
        this.size += 1;
        break;
      }
    }
    bucket.push([k,v]);
    this._storage.set(index, bucket);
    this.size += 1;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket !== undefined) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.size--;
  let bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  if (this.size < this._limit * 1 / 4) {
    this._limit /= 2;
    this.rehash()
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


