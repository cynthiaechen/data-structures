var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    }
    if (list.head.next === null) {
      list.head.next = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var formerHeadValue = list.head.value;
    var newHead = list.head.next;
    delete list.head;
    list.head = newHead;
    return formerHeadValue;
  };

  list.contains = function(target){
    var result = false;
    var checkNode = function(node) {
      if (node === null) {
        return;
      }
      if (node.value === target) {
        result = true;
      }
      checkNode(node.next);
    };
    checkNode(list.head);
    return result;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
