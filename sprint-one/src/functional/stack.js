var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var insertIndex = 0;
  var removeIndex;

  // Implement the methods below
  someInstance.push = function(value){
    storage[insertIndex] = value;
    insertIndex ++;
  };

  someInstance.pop = function(){
    removeIndex = someInstance.size() - 1;
    var backElement = storage[removeIndex];
    delete storage[removeIndex];
    insertIndex --;
    return backElement;
  };

  someInstance.size = function(){
    var count = 0;
    for (var key in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};
