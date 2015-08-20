var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage : {},
    insertIndex: 0,
    removeIndex: 0,
  };
  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
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














// var Queue = function(){
//   var someInstance = {
//       insertIndex : 0,
//       removeIndex: 0,
//     };
//     var storage = {};
//     // var insertIndex = 0;
//     // var removeIndex = 0;
//     extend(someInstance, queueMethods);
//     return someInstance;
//   };
// }

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };

// var queueMethods = {
//   enqueue : function(value){
//     this.storage[this.insertIndex] = value;
//     this.insertIndex ++;
//   },
//   dequeue : function(){
//     var frontElement = this.storage[this.removeIndex];
//     delete this.storage[this.removeIndex];
//     this.removeIndex ++;
//     return frontElement;
//   },
//   size : function(){
//     var count = 0;
//     for (var key in this.storage) {
//       count++;
//     }
//     console.log(this);
//     return count;
//   }
// }


