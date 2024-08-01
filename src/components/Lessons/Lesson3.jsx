const Lesson3 = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Day 7-10: Stacks and Queues</h2>
      <p className="mb-4">
        Stacks and queues are linear data structures that follow specific order
        of operations.
      </p>
      <h3 className="text-xl font-bold mb-2">Key Concepts</h3>
      <ul className="list-disc list-inside pl-6 mb-4">
        <li>What is a stack?</li>
        <li>Stack operations: Push, Pop, Peek</li>
        <li>Applications of stacks</li>
        <li>What is a queue?</li>
        <li>Queue operations: Enqueue, Dequeue, Front, Rear</li>
        <li>Applications of queues</li>
      </ul>
      <p className="mb-4">
        By the end of this lesson, you will have a solid understanding of stacks
        and queues and how to implement them.
      </p>

      <div className="p-5">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Introduction to Stacks
          </h2>
          <p>
            A stack is a linear data structure that follows the Last In, First
            Out (LIFO) principle. Elements are added and removed from the top of
            the stack.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Basic Operations on Stacks
          </h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Push:</b> Add an element to the top of the stack.
            </li>
            <li>
              <b>Pop:</b> Remove the top element from the stack.
            </li>
            <li>
              <b>Peek:</b> Get the value of the top element without removing it.
            </li>
            <li>
              <b>IsEmpty:</b> Check if the stack is empty.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. Implementing Stacks
          </h2>
          <pre className="bg-gray-200 p-4 rounded mb-4">
            {`class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove element from the top of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Get the top element
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }
}

// Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
stack.pop();
console.log(stack.peek()); // 10`}
          </pre>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Introduction to Queues
          </h2>
          <p>
            A queue is a linear data structure that follows the First In, First
            Out (FIFO) principle. Elements are added to the back of the queue
            and removed from the front.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Basic Operations on Queues
          </h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Enqueue:</b> Add an element to the back of the queue.
            </li>
            <li>
              <b>Dequeue:</b> Remove the front element from the queue.
            </li>
            <li>
              <b>Front:</b> Get the value of the front element without removing
              it.
            </li>
            <li>
              <b>IsEmpty:</b> Check if the queue is empty.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            6. Implementing Queues
          </h2>
          <pre className="bg-gray-200 p-4 rounded mb-4">
            {`class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the back of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Get the front element
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }
}

// Usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front()); // 10
queue.dequeue();
console.log(queue.front()); // 20`}
          </pre>
        </section>
        {/* <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            7. Examples and Exercises
          </h2>
          <p>
            Try the following exercises to practice working with stacks and
            queues:
          </p>
          <ol className="list-decimal list-inside  ml-5 mb-4">
            <li>
              Implement a stack using an array and perform push, pop, and peek
              operations.
            </li>
            <li>
              Implement a queue using an array and perform enqueue, dequeue, and
              front operations.
            </li>
            <li>Write a function to reverse a string using a stack.</li>
            <li>
              Write a function to check if a given sequence of parentheses is
              balanced using a stack.
            </li>
            <li>
              Implement a circular queue and perform the basic operations.
            </li>
          </ol>
        </section> */}
      </div>
    </div>
  );
};

export default Lesson3;
