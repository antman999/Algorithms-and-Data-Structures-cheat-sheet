class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Just like arrays this method is really fast
  // (tail) -> (new tail)
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  // Unshift is great for linked list unlike arrays we dont have to push all the values up one index
  // which is o(n) time we are just adding a new head o(1)
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length || !this.head) {
      return undefined;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(val, index) {
    if (this.get(index)) {
      this.get(index).val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(val);
    } else if (index === 0) {
      return !!this.unshift(val);
    } else {
      const newNode = new Node(val);
      let previousValue = this.get(index - 1);
      let temp = previousValue.next;
      previousValue.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    let previousValue = this.get(index - 1);
    let removedValue = previousValue.next;
    previousValue.next = removedValue.next;
    this.length--;
    return removedValue;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    /**
     * 1 -> 2 -> 3 -> 4 -> 5 // OG
     *
     * let node = 1
     * this.head = 5
     * this.tail = 1
     *
     * **Loop begins - 1st time**
     *
     * next = node.next  // 2
     * node.next = prev  //null (1st pass)
     * prev = node       //1
     * node = next       //2
     *
     * 2 -> 1 -> 3 -> 4 -> 5 // 1st
     *
     * Loop ends - 1st time
     *
     * **Loop begins - 2nd time**
     *
     * next = node.next  // 3
     * node.next = prev  // 1
     * prev = node       // 2
     * node = next       // 3
     *
     * 3 -> 2 -> 1 -> 4 -> 5  //2nd
     *
     * Loop ends - 2nd time
     *
     * **Loop begins - 3rd time**
     *
     * next = node.next  // 4
     * node.next = prev  // 2
     * prev = node       // 3
     * node = next       // 4
     *
     * 4 -> 3 -> 2 -> 1 -> 5
     *
     * Loop ends - 3rd time
     *
     * **Loop begins - 4th time**
     *
     * next = node.next  // 5
     * node.next = prev  // 3
     * prev = node       // 4
     * node = next       // 5
     *
     * 5 -> 4 -> 3 -> 2 -> 1
     *
     * Loop ends - 3rd time
     */
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
