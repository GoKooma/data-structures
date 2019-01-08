var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
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
  



/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * The time complexity of contains function, insertion in the middle of
 * the tree, and removing from the middle of the tree would be O(n) since 
 * all the elements have to be visited in the worst case. Adding a child 
 * to the current tree will have time complexity of O(1).
 * 
 */
