import CodePenEmbed from "../codePen/CodePenEmbed";

const Exercises4 = () => {
  return (
    <div className="pl-10">
      <Exercise1 />
      <hr className="my-8" />
      <Exercise2 />
      <hr className="my-8" />
      <Exercise3 />
      <hr className="my-8" />
    </div>
  );
};

// Exercise 1: Calculate Factorial of a Number
const Exercise1 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 10: Calculate Factorial of a Number
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that takes a positive integer as input and returns its
        factorial.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: 5 <br />
          Output: 120
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Initialize a variable to keep track of the factorial.</li>
        <li>Iterate from 1 to the input number.</li>
        <li>Multiply each number with the factorial variable.</li>
        <li>Return the factorial variable.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="poXeEEj"
          user="JusmeJr93"
          title="Count Vowels in a String"
        />
      </div>
    </div>
  );
};

// Exercise 2: Fibonacci Sequence
const Exercise2 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 11: Fibonacci Sequence
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that returns the first n numbers in the Fibonacci
        sequence.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: 5 <br />
          Output: [0, 1, 1, 2, 3]
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>
          Initialize an array with the first two numbers of the Fibonacci
          sequence.
        </li>
        <li>
          Iterate from 2 to n, adding the sum of the previous two numbers to the
          array.
        </li>
        <li>Return the array.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="ExBWggm"
          user="JusmeJr93"
          title="Fibonacci Sequence"
        />
      </div>
    </div>
  );
};

// Exercise 3: Palindrome Check for a Number
const Exercise3 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 12: Palindrome Check for a Number
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that checks if a given number is a palindrome.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: 121 <br />
          Output: true
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Convert the number to a string.</li>
        <li>Check if the string is equal to its reverse.</li>
        <li>Return true if they are equal, otherwise return false.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="qBzraaV"
          user="JusmeJr93"
          title="Palindrome Number"
        />
      </div>
    </div>
  );
};

export default Exercises4;
