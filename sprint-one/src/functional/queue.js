var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var insertIndex = 0;
  var removeIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[insertIndex] = value;
    insertIndex ++;
  };

  someInstance.dequeue = function(){
    var frontElement = storage[removeIndex];
    delete storage[removeIndex];
    removeIndex ++;
    return frontElement;
  };

  someInstance.size = function(){
    var count = 0;
    for (var key in storage) {
      count++;
    }
    console.log(storage);
    return count;
  };

  return someInstance;
};
