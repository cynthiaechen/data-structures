var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.insertIndex = 0;
  this.removeIndex = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.insertIndex] = value;
  this.insertIndex++;
};

Queue.prototype.dequeue = function() {
  var frontElement = this.storage[this.removeIndex];
  delete this.storage[this.removeIndex];
  this.removeIndex++;
  return frontElement;
};

Queue.prototype.size = function() {
  var count = 0;
  for (var key in this.storage) {
    count++;
  }
  return count;
};