var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  extend(newTree, treeMethods);
  return newTree;
};


  // your code here
  // newTree.children = null;  // fix me

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};




var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var test = false;

  if (this.value === target) {
    test = true;
  } 
  for (var i = 0; i <this.children.length; i++) {
    test = test || this.children[i].contains(target);
  }
  return test;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */



// A tree class, in functional with shared methods style, with the following properties:

// .children property, an array containing a number of subtrees

// .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree

// .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node


// var result = false;
  // var checkTree = function(tree) {
  //   if (this.value === target) {
  //     return true;
  //   }
  //   for (var i = 0; i < this.children.length; i++) {
  //     checkTree(this.children[i]);
  //   }
  // };
  // checkTree(tree);
  // return result;