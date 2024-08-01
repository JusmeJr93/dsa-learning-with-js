const Lesson6 = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Day 19-22: Heaps</h2>
      <p className="mb-4">
        Heaps are a specialized tree-based data structure that satisfies the
        heap property.
      </p>
      <h3 className="text-xl font-bold mb-2">Key Concepts</h3>
      <ul className="list-disc list-inside pl-6 mb-4">
        <li>What is a heap?</li>
        <li>Max heap vs. Min heap</li>
        <li>Heap operations: Insertion, Deletion</li>
        <li>Heapify and extract operations</li>
        <li>Applications of heaps</li>
      </ul>
      <p className="mb-4">
        Understanding heaps will help you in implementing efficient priority
        queues and other algorithms.
      </p>

      <div className="p-5">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Introduction to Heaps
          </h2>
          <p>
            A heap is a special tree-based data structure that satisfies the
            heap property. It is commonly used to implement priority queues and
            is useful in algorithms like heap sort. A heap can be visualized as
            a complete binary tree where every node satisfies the heap property.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Types of Heaps</h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Max-Heap:</b> In a max-heap, for any given node, the value of
              the node is greater than or equal to the values of its children.
              The maximum value is at the root node.
            </li>
            <li>
              <b>Min-Heap:</b> In a min-heap, for any given node, the value of
              the node is less than or equal to the values of its children. The
              minimum value is at the root node.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. Basic Heap Operations
          </h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Insertion:</b> Add a new element to the heap while maintaining
              the heap property.
            </li>
            <li>
              <b>Deletion:</b> Remove the root element (maximum in max-heap,
              minimum in min-heap) and restructure the heap.
            </li>
            <li>
              <b>Heapify:</b> Adjust the heap to maintain the heap property
              after insertion or deletion.
            </li>
            <li>
              <b>Peek:</b> Retrieve the root element without removing it.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Implementing a Binary Heap
          </h2>
          <pre className="bg-gray-200 p-4 rounded mb-4">
            {`class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Insert a new element
  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  // Bubble up the element to maintain heap property
  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      this.bubbleUp(parentIndex);
    }
  }

  // Remove and return the root element
  extractMax() {
    if (this.heap.length === 0) return null;
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return max;
  }

  // Bubble down the root element to maintain heap property
  bubbleDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largest = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
      largest = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
      largest = rightChildIndex;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      this.bubbleDown(largest);
    }
  }

  // Peek at the root element
  peek() {
    return this.heap[0];
  }
}

// Usage
const heap = new MaxHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
console.log("Max value:", heap.peek()); // 20
console.log("Extract max:", heap.extractMax()); // 20
console.log("Max value after extraction:", heap.peek()); // 10
`}
          </pre>
        </section>
        {/* <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Examples and Exercises
          </h2>
          <p>Try the following exercises to practice working with heaps:</p>
          <ol className="list-decimal list-inside mb-4">
            <li>Implement a min-heap with all basic operations.</li>
            <li>Use a heap to sort an array (Heap Sort).</li>
            <li>Implement a priority queue using a heap.</li>
            <li>Write a function to merge k sorted arrays using a heap.</li>
            <li>
              Write a function to find the kth largest element in an array using
              a heap.
            </li>
          </ol>
        </section> */}
      </div>
    </div>
  );
};

export default Lesson6;
