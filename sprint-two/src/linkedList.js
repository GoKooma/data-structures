var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let linkedListNode = Node();
    linkedListNode.value = value;
    if (list.head === null) {
      list.head = linkedListNode;
    }
    if (list.tail === null) {
      list.tail = linkedListNode;
    } else {
      list.tail.next = linkedListNode;
      list.tail = linkedListNode;
    }
    
  };

  list.removeHead = function() {
    if (list.head !== null) {
      let formerHead;
      if (list.head.next !== null){
        let temp = list.head.next;
        formerHead = list.head.value;
        delete list.head;
        list.head = temp;
      } else {
        formerHead = list.head.value;
        delete list.head;
        list.head = null;
      }
      return formerHead;
    }
    
  };

  list.contains = function(target) {
    // check head
    if (list.head === null) {

      return false;
    } else {
      // if head exists
      if (list.head.value === target) {
        return true;
      } else {
        let nextNode = list.head.next;

        while (nextNode !== null) {
          if (nextNode.value === target) {
            return true;
          } else {
            nextNode = nextNode.next;
          }
        }

        return false;
      }
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * The singly linked list has time complexity of O(1) for adding to tail and 
 * removing from head. But contains function, insertion at the middle or 
 * removing from the middle in the of singly linked list has time complexity 
 * of O(n), since it would have to go through all the elements in the 
 * worst case.
 * 
 */
