/**
 * Stacks follow LIFO
 *
 * Like books
 * or stack of plates.
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    // Always removing from this  and adding from this (Last in First Out)
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const previousFirst = this.first;
      this.first = newNode;
      newNode.next = previousFirst;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    const tempToBeRemoved = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return tempToBeRemoved.value;
  }
}
