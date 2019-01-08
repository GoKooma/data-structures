var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);
  child.parent = this;
  this.children.push(child);

};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (this.children.length > 0) {
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
  }
  
  return false;
}

treeMethods.removeFromParent = function() {
  if (this.parent !== null) {
    for (let i = 0; i < this.parent.children.length; i++) {
      if (this.parent.children[i].value === this.value) {
        this.parent.children.splice(i, 1);
        this.parent = null;
        return this;
      }
    }
  }
}
  
/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * The time complexity of contains function, insertion in the middle of
 * the tree, and removing from the middle of the tree would be O(n) since 
 * all the elements have to be visited in the worst case. Adding a child 
 * to the current tree will have time complexity of O(1).
 * 
 */
