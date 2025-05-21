const lessons = [
    {
        id: 1,
        title: 'Introduction to DSA and Big O Notation',
        content: `**Data Structures** are ways to organize and store data to make it easy to access and modify. Examples include arrays, linked lists, stacks, queues, hash tables, trees, and graphs.\n\n**Algorithms** are step-by-step procedures or formulas for solving a problem. Examples include sorting algorithms (like bubble sort, quick sort) and searching algorithms (like binary search).\n\nBig-O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. It is used to classify algorithms according to how their run time or space requirements grow as the input size grows.\n\n- **O(1)**: Constant time\n- **O(log n)**: Logarithmic time\n- **O(n)**: Linear time\n- **O(n log n)**: Linearithmic time\n- **O(n²)**: Quadratic time`
    },
    {
        id: 2,
        title: 'Arrays',
        content: `Arrays are collections of elements identified by index or key. They are a fundamental part of most programming languages.\n\n\`\`\`javascript\nlet arr = [1, 2, 3, 4, 5];\nconsole.log(arr[0]); // Output: 1\n\`\`\``
    },
    {
        id: 3,
        title: 'Linked Lists',
        content: `A linked list is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next.\n\n\`\`\`javascript\nclass Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n  \n  // Add a node at the end\n  append(data) {\n    let newNode = new Node(data);\n    if (this.head === null) {\n      this.head = newNode;\n    } else {\n      let current = this.head;\n      while (current.next) {\n        current = current.next;\n      }\n      current.next = newNode;\n    }\n  }\n}\n\`\`\``
    },
    {
        id: 4,
        title: 'Stacks',
        content: `A stack is a collection of elements with two principal operations: push (adds an element to the collection) and pop (removes the most recently added element).\n\n\`\`\`javascript\nclass Stack {\n  constructor() {\n    this.items = [];\n  }\n\n  push(element) {\n    this.items.push(element);\n  }\n\n  pop() {\n    if (this.items.length == 0) return "Underflow";\n    return this.items.pop();\n  }\n}\n\`\`\``
    },
    {
        id: 5,
        title: 'Queues',
        content: `A queue is a collection of elements supporting two principal operations: enqueue (adds an element to the end) and dequeue (removes the first element).\n\n\`\`\`javascript\nclass Queue {\n  constructor() {\n    this.items = [];\n  }\n\n  enqueue(element) {\n    this.items.push(element);\n  }\n\n  dequeue() {\n    if (this.items.length == 0) return "Underflow";\n    return this.items.shift();\n  }\n}\n\`\`\``
    },
    {
        id: 6,
        title: 'Hash Tables',
        content: `A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values.\n\n\`\`\`javascript\nclass HashTable {\n  constructor() {\n    this.table = new Array(137);\n  }\n\n  // Simple hash function\n  hash(string) {\n    let total = 0;\n    for (let i = 0; i < string.length; i++) {\n      total += string.charCodeAt(i);\n    }\n    return total % this.table.length;\n  }\n\n  add(key, value) {\n    const index = this.hash(key);\n    this.table[index] = value;\n  }\n\n  get(key) {\n    const index = this.hash(key);\n    return this.table[index];\n  }\n}\n\`\`\``
    },
    {
        id: 7,
        title: 'Trees',
        content: \`A tree is a widely used abstract data type (ADT) that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.\`
    },
    {
        id: 8,
        title: 'Graphs',
        content: \`A graph is a collection of nodes connected by edges. It can be used to represent various real-world structures, like networks, paths, etc.\`
    },
    {
        id: 9,
        title: 'Heaps',
        content: \`A heap is a specialized tree-based data structure that satisfies the heap property. It is used to implement priority queues.\`
    },
    {
        id: 10,
        title: 'Sorting Algorithms',
        content: \`- **Bubble Sort**\n- **Merge Sort**\n- **Quick Sort**\`
    },
    {
        id: 11,
        title: 'Searching Algorithms',
        content: \`- **Linear Search**\n- **Binary Search**\`
    },
    {
        id: 12,
        title: 'Graph Algorithms',
        content: \`- **Depth-First Search (DFS)**\n- **Breadth-First Search (BFS)**\`
    },
    {
        id: 13,
        title: 'Dynamic Programming',
        content: \`- **Fibonacci Sequence**\n- **Knapsack Problem**\`
    }
];

export default lessons;