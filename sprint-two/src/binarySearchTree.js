var BinarySearchTree = function(value){

  this.value = value;
  this.left = null;
  this.right = null;

};

BinarySearchTree.prototype.insert = function(nodeValue) {
  if (nodeValue < this.value) {
    if (this.left) {
      this.left.insert(nodeValue);
    } else {
      this.left = new BinarySearchTree(nodeValue);
    }
  } else if (nodeValue > this.value) {
    if (this.right) {
      this.right.insert(nodeValue);
    } else {
      this.right = new BinarySearchTree(nodeValue);
    }
  }
  // if (nodeValue < this.value) {
  //   this.left = new BinarySearchTree(nodeValue);
  // } else {
  //   this.right = new BinarySearchTree(nodeValue);
  // }
}

BinarySearchTree.prototype.contains = function(nodeValue) {

}

BinarySearchTree.prototype.depthFirstLog = function() {

}




// }if (this.left) {
//   if (nodeValue > this.left.value) {
//     this.left.right.value = new BinarySearchTree(nodeValue)
//   }

// if (this.left === null) {
    
//   this.left = new BinarySearchTree(nodeValue);
// } 
// if (this.right === null) {
//   this.right = new BinarySearchTree(nodeValue);
// }


/*
 * Complexity: What is the time complexity of the above functions?
 */







