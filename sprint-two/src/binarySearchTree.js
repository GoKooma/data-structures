var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (this.value < value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }

  } else if (this.value > value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(target) {
  if (this.value !== target) {
    if (this.value < target) {
      if (this.right !== null) {
        return this.right.contains(target);
      } else {
        return false;
      }
      
    } else if (this.value > target) {
      if (this.left !== null) {
        return this.left.contains(target);
      } else {
        return false;
      }
    }

  } else if (this.value === target) {
    return true;
  }
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  let temp = cb(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
  
  return temp;
}

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * The time complexity of insert and contains functions will be O(log(n)),
 * because they do not need to visit all the nodes to carry out function. But
 * depthFirstLog function will have time complexity of O(n), since it has to
 * visit all the nodes.
 */
