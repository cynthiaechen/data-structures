var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var hashNumber = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(hashNumber);
  if (bucket === undefined) {
    this._storage.set(hashNumber, [[key, value]]);
  } else {
    var flag = false;
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        flag = true
      }
    }
  }
  if (flag === false) {
    bucket.push([key, value]);
  }
};

HashTable.prototype.retrieve = function(key){
  var hashNumber = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(hashNumber);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(key){
  var hashNumber = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(hashNumber);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket[i][1] = null;
    }
  }
};





/*
 * Complexity: What is the time complexity of the above functions?
 */


