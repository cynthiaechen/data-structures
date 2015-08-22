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
}

BinarySearchTree.prototype.contains = function(value) {

  if (value === this.value) {
    return true;
  }
  if (value < this.value) {
    if (this.left === null) {
      return false;
    }
    if (this.left) {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    }
    if (this.right) {
      return this.right.contains(value);
    }
  }
}

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
}






/*
 * Complexity: What is the time complexity of the above functions?
 */







