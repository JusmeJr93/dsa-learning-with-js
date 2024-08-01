/* eslint-disable react/no-unescaped-entities */
const Lesson2 = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Day 4-6: Arrays</h2>
      <p className="mb-4">
        Arrays are one of the most fundamental data structures. They are used to
        store multiple values in a single variable.
      </p>
      <h3 className="text-xl font-bold mb-2">Key Concepts</h3>
      <ul className="list-disc list-inside pl-6 mb-4">
        <li>What is an array?</li>
        <li>Declaring and initializing arrays</li>
        <li>Accessing and modifying array elements</li>
        <li>Common operations: Traversal, Insertion, Deletion</li>
        <li>Multi-dimensional arrays</li>
      </ul>
      <p className="mb-4">
        Let's explore arrays in detail and understand how they are used in
        different scenarios.
      </p>

      <div className="p-5">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Introduction to Arrays
          </h2>
          <p>
            An array is a data structure that can hold a collection of items,
            usually of the same type, in a contiguous block of memory. Arrays
            are one of the simplest and most widely used data structures.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Declaring and Initializing Arrays
          </h2>
          <p>
            In many programming languages, you can declare an array and specify
            its size. Here’s how you can declare and initialize an array in
            JavaScript:
          </p>
          <pre className="bg-gray-200 p-4 rounded my-4">
            {`// Declaring an array
let arr = [];

// Initializing an array with values
let numbers = [1, 2, 3, 4, 5];

// Declaring an array with a specific size
let fixedSizeArray = new Array(5);`}
          </pre>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. Accessing Array Elements
          </h2>
          <p>
            Array elements are accessed using their index, which starts from 0.
            Here’s how you can access and modify elements in an array:
          </p>
          <pre className="bg-gray-200 p-4 rounded my-4">
            {`let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana

// Modifying elements
fruits[1] = "Blueberry";
console.log(fruits[1]); // Blueberry`}
          </pre>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Common Array Operations
          </h2>
          <p>Here are some common operations you can perform on arrays:</p>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>Adding elements</li>
            <li>Removing elements</li>
            <li>Iterating through elements</li>
            <li>Finding elements</li>
            <li>Sorting arrays</li>
          </ul>
          <pre className="bg-gray-200 p-4 rounded my-4">
            {`let numbers = [1, 2, 3, 4, 5];

// Adding an element at the end
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// Removing the last element
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]

// Iterating through an array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Finding an element
let index = numbers.indexOf(3);
console.log(index); // 2

// Sorting an array
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // [1, 2, 3, 4, 5]`}
          </pre>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Examples and Exercises
          </h2>
          <p>Try the following exercises to practice working with arrays:</p>
          <ol className="list-decimal list-inside ml-5 mb-4">
            <li>
              Create an array of your favorite fruits and print each fruit to
              the console.
            </li>
            <li>Add a new fruit to the beginning of the array.</li>
            <li>Remove the last fruit from the array.</li>
            <li>Find the index of a specific fruit in the array.</li>
            <li>Sort the array of fruits alphabetically.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Lesson2;
