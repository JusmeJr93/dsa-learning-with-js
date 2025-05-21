const exercises = [
    {
        id: 1,
        title: 'Reverse a String',
        description: 'Write a function to reverse a string.',
        solution: `function reverseString(str) {
        const stack = [];
        for (let char of str) {
          stack.push(char);
        }
        
        let reversedStr = '';
        while (stack.length > 0) {
          reversedStr += stack.pop();
        }
        
        return reversedStr;
      }`
    },
    {
        id: 2,
        title: 'Check for Balanced Parentheses',
        description: 'Check if the parentheses in a string are balanced.',
        solution: `function isBalanced(str) {
        const stack = [];
        const pairs = { '(': ')', '{': '}', '[': ']' };
        
        for (let char of str) {
          if (pairs[char]) {
            stack.push(char);
          } else if (Object.values(pairs).includes(char)) {
            if (pairs[stack.pop()] !== char) return false;
          }
        }
        
        return stack.length === 0;
      }`
    },
    {
        id: 3,
        title: 'Find Maximum Element in an Array',
        description: 'Write a function to find the maximum element in an array of numbers.',
        solution: `function findMax(arr) {
        if (arr.length === 0) return undefined;
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
            max = arr[i];
          }
        }
        return max;
      }`
    },
    {
        id: 4,
        title: 'Implement a Queue using two Stacks',
        description: 'Implement a Queue class with enqueue and dequeue methods using two stacks.',
        solution: `class QueueWithStacks {
        constructor() {
          this.inStack = [];
          this.outStack = [];
        }

        enqueue(val) {
          this.inStack.push(val);
        }

        dequeue() {
          if (this.outStack.length === 0) {
            if (this.inStack.length === 0) return undefined; // Or throw error
            while (this.inStack.length > 0) {
              this.outStack.push(this.inStack.pop());
            }
          }
          return this.outStack.pop();
        }

        peek() {
          if (this.outStack.length === 0) {
            if (this.inStack.length === 0) return undefined;
            while (this.inStack.length > 0) {
              this.outStack.push(this.inStack.pop());
            }
          }
          return this.outStack[this.outStack.length - 1];
        }

        isEmpty() {
          return this.inStack.length === 0 && this.outStack.length === 0;
        }
      }`
    },
    {
        id: 5,
        title: 'Simple Bubble Sort',
        description: 'Implement the bubble sort algorithm to sort an array of numbers in ascending order.',
        solution: `function bubbleSort(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              // Swap arr[j] and arr[j+1]
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
          }
        }
        return arr;
      }`
    },
    {
        id: 6,
        title: 'Check if a String is a Palindrome',
        description: 'Write a function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring case and non-alphanumeric characters.',
        solution: \`function isPalindrome(str) {
        const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
      }\`
    },
    {
        id: 7,
        title: 'Sum of Nodes in a Linked List',
        description: 'Write a function that returns the sum of all values in a singly linked list. Assume list nodes have a \`value\` property and a \`next\` property.',
        solution: \`function sumLinkedList(head) {
        let sum = 0;
        let current = head;
        while (current !== null) {
          sum += current.value;
          current = current.next;
        }
        return sum;
      }
      
      // Example Node class (not part of the solution function but for context):
      // class Node {
      //   constructor(value) {
      //     this.value = value;
      //     this.next = null;
      //   }
      // }
      \`
    }
];

export default exercises;