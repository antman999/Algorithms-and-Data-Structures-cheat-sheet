/** 
 Heap - 
 A tree like structure each parent has 2 nodes in a max binary heap
 the only rule we follow for now is that the parent most be bigger than its
 children, but there is no relation between sibling nodes. (vice-versa for min heap)

 To find a child from a heap the formula is: 
 n represents the parent index 

 left child index - 2n + 1
 right child index - 2n + 2 


 To find a parent from a child node the formula is reversed. 
 n represents the child index 

 (n-1/2)
 
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * Adding to a heap -> add to the end -> bubble up
   * *Since there is no relation to siblings insertion is o(log n)*
   * We only care about the side that we start in!
   */

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    // Value of the last index recently inserted since we have to bubble up.
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];
      if (element <= parentElement) {
        break;
      }
      this.values[parentIdx] = element;
      this.values[idx] = parentElement;
      idx = parentIdx;
    }
  }

  extractMax() {
    // Remove the smallest node from the end and make that the head to sink down
    // Grab the biggest value -> pop the smallest (remove) -> replace the head with the smallest value then we sink.
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown(node) {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[idx];
    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let maxHeap = new MaxBinaryHeap();
