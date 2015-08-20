var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.insertIndex = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.insertIndex] = value;
  this.insertIndex ++;
};

Stack.prototype.pop = function() {
  var removeIndex = this.size() - 1;
  var backElement = this.storage[removeIndex];
  delete this.storage[removeIndex];
  this.insertIndex --;
  return backElement;
};

Stack.prototype.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
};



// Do:
// Work within the src/pseudoclassical/ folder
// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor
// Don't:
// Declare the instance explicitly
// Return the instance explicitly