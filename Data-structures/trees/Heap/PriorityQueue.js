/**
 * A priority queue use a min heap to build up values 1 - highest / 5 - lowest (depending on the highest num)
 *
 * We essentially want to build up the heap / priority queue by looking at priority.
 */

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    if (priority < -1) {
      return null;
    }
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];
      if (element.priority >= parentElement.priority) {
        break;
      }
      this.values[parentIdx] = element;
      this.values[idx] = parentElement;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[index];
    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("headache", 2);
priorityQueue.enqueue("broken arm", 1);
priorityQueue.enqueue("drunk", 4);
priorityQueue.enqueue("car crash", 0);
priorityQueue.enqueue("fever", 3);
priorityQueue.enqueue("rash", 4);
priorityQueue.enqueue("allergy", 2);
priorityQueue.enqueue("extreme allergy", 1);
priorityQueue.enqueue("back pain", 5);
priorityQueue.enqueue("Gunshot", 0);

console.log(priorityQueue);
