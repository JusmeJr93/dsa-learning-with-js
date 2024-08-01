import CodePenEmbed from "../codePen/CodePenEmbed";

/* eslint-disable react/no-unescaped-entities */
const Exercises3 = () => {
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

// Exercise 1: Reverse a String
const Exercise1 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Exercise 7: Reverse a String</h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that takes a string as input and returns the string
        reversed.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: "hello" <br />
          Output: "olleh"
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal ">
        <li>Initialize an empty string for the reversed result.</li>
        <li>Iterate over the input string from the end to the beginning.</li>
        <li>Append each character to the result string.</li>
        <li>Return the result string.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="mdZWrEz"
          user="JusmeJr93"
          title="Reverse a String"
        />
      </div>
    </div>
  );
};

// Exercise 2: Check if a String is a Palindrome
const Exercise2 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 8: Check if a String is a Palindrome
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that checks if a given string is a palindrome (reads
        the same forwards and backwards).
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: "racecar" <br />
          Output: true
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Reverse the string using the reverseString function.</li>
        <li>Compare the reversed string with the original string.</li>
        <li>Return true if they are equal, otherwise return false.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="NWZpRrQ"
          user="JusmeJr93"
          title="Palindrome string"
        />
      </div>
    </div>
  );
};

// Exercise 3: Count Vowels in a String
const Exercise3 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 9: Count Vowels in a String
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that counts the number of vowels in a given string.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: "hello world" <br />
          Output: 3
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Initialize a counter variable to zero.</li>
        <li>Iterate over each character in the string.</li>
        <li>Check if the character is a vowel (a, e, i, o, u).</li>
        <li>If it is, increment the counter.</li>
        <li>Return the counter.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="MWMpjjy"
          user="JusmeJr93"
          title="Factorial of a Number"
        />
      </div>
    </div>
  );
};

export default Exercises3;
