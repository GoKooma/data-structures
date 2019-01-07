

// Instantiate a new graph
var Graph = function (val) {
  this.nodes = {};
  this.value = val;
  this.edge = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.nodes[node] = node;
  this.edge[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  if (this.nodes[node]) {
    return true;
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  if (this.edge[node]) {
    for (let i = 0; i < this.edge[node].length; i++) {
      this.removeEdge(this.edge[node][i], node)
    }
  }

  if (this.edge[node].length === 0) {
    delete this.edge[node];
  }

  if (this.nodes[node]) {
    delete this.nodes[node];
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (this.edge[fromNode]) {
    for (let i = 0; i < this.edge[fromNode].length; i++) {
      if (this.edge[fromNode][i] === toNode) {
        return true;
      }
    }
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {

  this.edge[fromNode].push(toNode);
  this.edge[toNode].push(fromNode);
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  if (this.edge[fromNode]) {
    for (let i = 0; i < this.edge[fromNode].length; i++) {
      if (this.edge[fromNode][i] === toNode) {
        this.edge[fromNode].splice(i, 1);
      }
    }

    for (let j = 0; j < this.edge[toNode].length; j++) {
      if (this.edge[toNode][j] === fromNode) {
        this.edge[toNode].splice(j, 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (let key in this.nodes) {
    cb(Number(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


