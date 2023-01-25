class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) {
          return undefined;
        }
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return undefined;
    } else {
      let current = this.root;
      while (true) {
        if (current.value === val) {
          return true;
        }
        if (val > current.value) {
          if (current.right) {
            current = current.right;
          } else {
            return false;
          }
        } else if (val < current.value) {
          if (current.left) {
            current = current.left;
          } else {
            return false;
          }
        }
      }
    }
  }

  BFS() {
    let queue = [];
    let visited = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return visited;
  }

  DFS_preOrder() {
    let visited = [];
    let current = this.root;
    const traverse = (node) => {
      visited.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(current);
    return visited;
  }

  DFS_postOrder() {
    let visited = [];
    let current = this.root;
    const traversePostOrder = (node) => {
      if (node.left) {
        traversePostOrder(node.left);
      }
      if (node.right) {
        traversePostOrder(node.right);
      }
      visited.push(node.value);
    };
    traversePostOrder(current);
    return visited;
  }

  DFS_InOrder() {
    let visited = [];
    let current = this.root;
    const traverseInOrder = (node) => {
      if (node.left) {
        traverseInOrder(node.left);
      }
      visited.push(node.value);
      if (node.right) {
        traverseInOrder(node.right);
      }
    };
    traverseInOrder(current);
    return visited;
  }
}
let bst = new BST();
bst.insert(10);
bst.insert(15);
bst.insert(6);
bst.insert(8);
bst.insert(3);
bst.insert(20);
