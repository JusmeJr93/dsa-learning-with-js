/* eslint-disable no-useless-escape */

import CodePenEmbed from "../codePen/CodePenEmbed";

/* eslint-disable react/no-unescaped-entities */
const Exercises6 = () => {
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

// Exercise 1: Check if a String Contains Only Digits
const Exercise1 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 16: Check if a String Contains Only Digits
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that checks if a given string contains only digits.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: "12345" <br />
          Output: true
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>
          Use a regular expression to check if the string contains only digits.
        </li>
        <li>
          Return true if the string matches the regular expression, otherwise
          return false.
        </li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="BagWLLE"
          user="JusmeJr93"
          title="Check if a String Contains Only Digits"
        />
      </div>
    </div>
  );
};

// Exercise 2: Convert a String to Title Case
const Exercise2 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 17: Convert a String to Title Case
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that converts a given string to title case (first
        letter of each word is capitalized).
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: "hello world" <br />
          Output: "Hello World"
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Split the string into words.</li>
        <li>Capitalize the first letter of each word.</li>
        <li>Join the words back into a single string.</li>
        <li>Return the result string.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="poXeENj"
          user="JusmeJr93"
          title="Number of Words in a String"
        />
      </div>
    </div>
  );
};

// Exercise 3: Count the Number of Words in a String
const Exercise3 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 18: Count the Number of Words in a String
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that counts the number of words in a given string.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: "hello world" <br />
          Output: 2
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Split the string into words using spaces as the delimiter.</li>
        <li>Count the number of elements in the resulting array.</li>
        <li>Return the count.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="WNqpGoe"
          user="JusmeJr93"
          title="Convert a String to Title Case"
        />
      </div>
    </div>
  );
};

export default Exercises6;
