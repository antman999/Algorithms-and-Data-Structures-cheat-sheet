class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Adding to the end
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  // Removing from the beginning
  dequeue() {
    if (!this.first) {
      return null;
    }
    let tempToBeRemoved = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first.next = this.first;
    this.size--;
    return tempToBeRemoved;
  }
}
