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
    // Add more exercises as needed
];

export default exercises;