/* eslint-disable react/no-unescaped-entities */
const Lesson4 = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Day 11-14: Linked Lists</h2>
      <p className="mb-4">
        Linked lists are a dynamic data structure, allowing efficient insertions
        and deletions.
      </p>
      <h3 className="text-xl font-bold mb-2">Key Concepts</h3>
      <ul className="list-disc list-inside pl-6 mb-4">
        <li>What is a linked list?</li>
        <li>Singly linked list vs. doubly linked list</li>
        <li>Creating and traversing linked lists</li>
        <li>Insertion and deletion operations</li>
        <li>Advantages and disadvantages of linked lists</li>
      </ul>
      <p className="mb-4">
        Let's delve into linked lists and understand how they work and where
        they are used.
      </p>

      <div className="p-5">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Introduction to Linked Lists
          </h2>
          <p>
            A linked list is a linear data structure where each element is a
            separate object, each containing a reference (or link) to the next
            element in the sequence. Linked lists are used to implement dynamic
            data structures such as stacks, queues, and deques.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Types of Linked Lists
          </h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Singly Linked List:</b> Each node points to the next node and
              the last node points to null.
            </li>
            <li>
              <b>Doubly Linked List:</b> Each node points to both the next and
              previous nodes.
            </li>
            <li>
              <b>Circular Linked List:</b> The last node points back to the
              first node, forming a circle.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. Basic Operations on Linked Lists
          </h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Insertion:</b> Add a node at the beginning, end, or at a
              specific position.
            </li>
            <li>
              <b>Deletion:</b> Remove a node from the beginning, end, or a
              specific position.
            </li>
            <li>
              <b>Traversal:</b> Access each node in the list.
            </li>
            <li>
              <b>Search:</b> Find a node with a specific value.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Implementing Linked Lists
          </h2>
          <pre className="bg-gray-200 p-4 rounded mb-4">
            {`class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add a node at the beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Add a node at the end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Delete a node by value
  delete(value) {
    if (!this.head) return;
    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Print the list
  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
  }
}

// Usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.print(); // 5 -> 10 -> 20 -> null
list.delete(10);
list.print(); // 5 -> 20 -> null`}
          </pre>
        </section>
        {/* <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Examples and Exercises
          </h2>
          <p>
            Try the following exercises to practice working with linked lists:
          </p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              Implement a singly linked list with methods for insertion,
              deletion, and traversal.
            </li>
            <li>
              Implement a doubly linked list with methods for insertion,
              deletion, and traversal.
            </li>
            <li>Write a function to reverse a singly linked list.</li>
            <li>
              Write a function to find the middle element of a linked list.
            </li>
            <li>
              Implement a circular linked list and perform basic operations.
            </li>
          </ol>
        </section> */}
      </div>
    </div>
  );
};

export default Lesson4;
