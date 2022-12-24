class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let removedTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedTail.previous;
      this.tail.next = null;
      removedTail.previous = null;
    }
    this.length--;
    return removedTail;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let removedHead = this.head;
    let removedTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.previous = null;
      removedHead.next = null;
    }
    this.length--;
    return removedHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Since we can start at the tail we can check if the index is closer to the start or end
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let midPoint = Math.floor(this.length / 2);
    let counter;
    let current;
    if (index <= midPoint) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        console.log("starting from 0");
        current = current.next;
        counter++;
      }
      return current;
    } else {
      current = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        console.log("starting from end woohoo");
        current = current.previous;
        counter--;
      }
      return current;
    }
  }

  set(val, index) {
    let foundNode = this.get(index);
    if (!foundNode) {
      return false;
    }
    foundNode.val = val;
    return true;
  }

  insert(val, index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    let newNode = new Node(val);
    /** 1 <-> 2 <-> (3) <-> 4 // index <-> 2
     * newNode = 5
     * prevNode = 2
     * currentNode = prevNode.next // 3
     *
     * newNode.previous = 2
     * newNode.next = 3
     * currentNode.previous = 5
     * 1 <-> 2 <-> 5 <-> 3 <-> 4
     */
    let prevNode = this.get(index - 1);
    let currentNode = prevNode.next;
    prevNode.next = newNode;
    newNode.previous = prevNode;
    newNode.next = currentNode;
    currentNode.previous = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop(index);
    }
    if (index === 0) {
      return this.shift(index);
    }
    let removedNode = this.get(index);
    removedNode.previous.next = removedNode.next;
    removedNode.next.previous = removedNode.previous;
    removedNode.next = null;
    removedNode.previous = null;

    this.length--;
    return removedNode;
  }
}
