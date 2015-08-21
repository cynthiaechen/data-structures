

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
 // this.nodes = {};
 this.edges = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if(this[node]) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  delete this[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){ 
  if (this.edges[fromNode + toNode] || this.edges[toNode + toNode]) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode + toNode] = fromNode + toNode;
  this.edges[toNode + fromNode] = toNode + fromNode;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.edges[fromNode + toNode];
  delete this.edges[toNode + fromNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var key in this) {
    cb(this[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// var graph = new Graph();
// graph.addNode('apples');
// graph.addNode('satsumas');
// graph.addEdge('satsumas', 'apples');
// graph.hasEdge('apples', 'satsumas')




// var connectToSatsumas = function(item) {
//     graph.addEdge(item, 'satsumas');
// };
// graph.addNode('satsumas');
// graph.addNode('puppies');
// graph.addNode('kittens');
// graph.addNode('penguins');
// graph.forEachNode(connectToSatsumas);

// graph.hasEdge('puppies', 'satsumas')
// graph.hasEdge('kittens', 'satsumas')
// graph.hasEdge('penguins', 'satsumas')
// graph.hasEdge('satsumas', 'satsumas')



