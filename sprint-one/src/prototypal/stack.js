var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.insertIndex = 0;

  return someInstance;
};


var stackMethods = {
  push: function(value) {
    this.storage[this.insertIndex] = value;
    this.insertIndex ++;
  },
  pop: function() {
    var removeIndex = this.size() - 1;
    var backElement = this.storage[removeIndex];
    delete this.storage[removeIndex];
    this.insertIndex --;
    return backElement;
  },
  size: function() {
    var count = 0;
    for (var key in this.storage) {
      count++;
    }
    return count;
  }
};
