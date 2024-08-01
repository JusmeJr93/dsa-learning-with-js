/* eslint-disable react/no-unescaped-entities */
const Lesson5 = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Day 15-18: Trees</h2>
      <p className="mb-4">
        Trees are a hierarchical data structure that store elements in a
        parent-child relationship.
      </p>
      <h3 className="text-xl font-bold mb-2">Key Concepts</h3>
      <ul className="list-disc list-inside pl-6 mb-4">
        <li>What is a tree?</li>
        <li>Binary trees and binary search trees</li>
        <li>Tree traversal methods: In-order, Pre-order, Post-order</li>
        <li>Tree operations: Insertion, Deletion, Searching</li>
        <li>Applications of trees</li>
      </ul>
      <p className="mb-4">
        By understanding trees, you'll be able to solve more complex problems
        efficiently.
      </p>

      <div className="p-5">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Introduction to Trees
          </h2>
          <p>
            A tree is a hierarchical data structure consisting of nodes, with
            each node containing a value and references to child nodes. The top
            node is called the root, and nodes with no children are called
            leaves. Trees are used to represent hierarchical relationships and
            are fundamental in various applications.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Types of Trees</h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Binary Tree:</b> A tree where each node has at most two
              children, commonly referred to as the left and right children.
            </li>
            <li>
              <b>Binary Search Tree (BST):</b> A binary tree where the left
              child is less than the parent node, and the right child is
              greater.
            </li>
            <li>
              <b>Balanced Tree:</b> A tree where the height of the two subtrees
              of any node differs by no more than one.
            </li>
            <li>
              <b>AVL Tree:</b> A self-balancing binary search tree where the
              difference in heights between left and right subtrees is no more
              than one.
            </li>
            <li>
              <b>Red-Black Tree:</b> A self-balancing binary search tree where
              nodes have an extra bit for color to ensure the tree remains
              balanced.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. Basic Tree Operations
          </h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>Insertion:</b> Adding a node to the tree while maintaining the
              tree's properties.
            </li>
            <li>
              <b>Deletion:</b> Removing a node from the tree and restructuring
              the tree if necessary.
            </li>
            <li>
              <b>Searching:</b> Finding a node with a specific value in the
              tree.
            </li>
            <li>
              <b>Traversal:</b> Visiting all the nodes in a specific order.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Tree Traversals</h2>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              <b>In-order Traversal:</b> Visit the left subtree, root, and then
              the right subtree.
            </li>
            <li>
              <b>Pre-order Traversal:</b> Visit the root, left subtree, and then
              the right subtree.
            </li>
            <li>
              <b>Post-order Traversal:</b> Visit the left subtree, right
              subtree, and then the root.
            </li>
            <li>
              <b>Level-order Traversal:</b> Visit nodes level by level from top
              to bottom.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Implementing a Binary Tree
          </h2>
          <pre className="bg-gray-200 p-4 rounded mb-4">
            {`class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a node
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Recursive function to insert a node
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal
  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  // Pre-order traversal
  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // Post-order traversal
  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
}

// Usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
console.log("In-order traversal:");
tree.inOrder(); // 5, 10, 15
console.log("Pre-order traversal:");
tree.preOrder(); // 10, 5, 15
console.log("Post-order traversal:");
tree.postOrder(); // 5, 15, 10`}
          </pre>
        </section>
        {/* <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            6. Examples and Exercises
          </h2>
          <p>Try the following exercises to practice working with trees:</p>
          <ol className="list-decimal list-inside mb-4">
            <li>
              Implement a binary search tree and perform insertion, deletion,
              and traversal.
            </li>
            <li>Write a function to find the height of a binary tree.</li>
            <li>Write a function to check if a binary tree is balanced.</li>
            <li>
              Implement a function to find the lowest common ancestor of two
              nodes in a binary tree.
            </li>
            <li>
              Write a function to convert a binary search tree to a sorted
              doubly linked list.
            </li>
          </ol>
        </section> */}
      </div>
    </div>
  );
};

export default Lesson5;
