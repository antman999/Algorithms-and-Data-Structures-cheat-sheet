class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      return undefined;
    }
    this.adjacencyList[vertex] = [];
    return this;
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return undefined;
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return undefined;
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
    return this;
    // We can also use varName = list.indexOf(vertex1) and then splice(varName, 1)
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      const vertexValues = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, vertexValues);
    }
    delete this.adjacencyList[vertex];
  }

  DFS_recursive(start) {
    let results = [];
    let visited = {};
    const list = this.adjacencyList;

    const helper = (vertex) => {
      if (vertex === null) return null;
      visited[vertex] = true;
      results.push(vertex);
      list[vertex].forEach((edge) => {
        if (!visited[edge]) return helper(edge);
      });
    };
    helper(start);
    return results;
  }

  DFS_iterative(start) {
    let stack = [];
    let results = [];
    let visited = {};
    stack.push(start);
    visited[start] = true;
    while (stack.length) {
      let currentVertex = stack.pop();
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return results;
  }

  BFS(start) {
    let queue = [start];
    let results = [];
    let visited = {};
    visited[start] = true;
    let current;
    while (queue.length) {
      current = queue.shift();
      results.push(current);
      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return results;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
