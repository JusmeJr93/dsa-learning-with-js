import CodePenEmbed from "../codePen/CodePenEmbed";

/* eslint-disable react/no-unescaped-entities */
const Exercises2 = () => {
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

// Exercise 1: Sum of Elements in an Array
const Exercise1 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 4: Sum of Elements in an Array
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that takes an array of numbers as input and returns the
        sum of all the elements in the array.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: [1, 2, 3, 4] <br />
          Output: 10
        </code>
      </pre>
      <h3 className="text-xl font-semibold mt-3">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Initialize a variable to keep track of the sum.</li>
        <li>Iterate over each element in the array.</li>
        <li>Add each element to the sum variable.</li>
        <li>Return the sum.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="BagWLBv"
          user="JusmeJr93"
          title="Sum of Elements in an Array"
        />
      </div>
    </div>
  );
};

// Exercise 2: Find the Maximum Element in an Array
const Exercise2 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 5: Find the Maximum Element in an Array
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that takes an array of numbers as input and returns the
        maximum element in the array.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: [1, 5, 3, 7, 2] <br />
          Output: 7
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Initialize a variable to keep track of the maximum value.</li>
        <li>Iterate over each element in the array.</li>
        <li>
          If the current element is greater than the maximum value, update the
          maximum value.
        </li>
        <li>Return the maximum value.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="XWLMjXN"
          user="JusmeJr93"
          title="Maximum Element in an Array"
        />
      </div>
    </div>
  );
};

// Exercise 3: Count the Number of Occurrences of a Number
const Exercise3 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 6: Count the Number of Occurrences of a Number
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that takes an array of numbers and a target number as
        input, and returns the number of times the target number appears in the
        array.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: [1, 2, 2, 3, 2], target: 2 <br />
          Output: 3
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Initialize a counter variable to zero.</li>
        <li>Iterate over each element in the array.</li>
        <li>
          If the current element matches the target number, increment the
          counter.
        </li>
        <li>Return the counter.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="WNqpGrV"
          user="JusmeJr93"
          title="Number of Occurrences of a Number"
        />
      </div>
    </div>
  );
};

export default Exercises2;
