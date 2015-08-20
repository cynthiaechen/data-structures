var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.insertIndex = 0;
  someInstance.removeIndex = 0;

  return someInstance;
};


var queueMethods = {
  enqueue : function(value) {
    this.storage[this.insertIndex] = value;
    this.insertIndex++;
  },
  dequeue: function() {
    var frontElement = this.storage[this.removeIndex];
    delete this.storage[this.removeIndex];
    this.removeIndex++;
    return frontElement;
  },
  size: function() {
    var count = 0;
    for (var key in this.storage) {
      count++;
    }
    return count;
  }
};


