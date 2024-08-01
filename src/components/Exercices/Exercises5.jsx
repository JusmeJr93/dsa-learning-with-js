import CodePenEmbed from "../codePen/CodePenEmbed";

const Exercises5 = () => {
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

// Exercise 1: Merge Two Sorted Arrays
const Exercise1 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 13: Merge Two Sorted Arrays
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that takes two sorted arrays and returns a single
        sorted array that merges the two arrays.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: [1, 3, 5], [2, 4, 6] <br />
          Output: [1, 2, 3, 4, 5, 6]
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Initialize an empty array to hold the merged result.</li>
        <li>Use two pointers to traverse both arrays.</li>
        <li>
          Compare elements from both arrays and push the smaller one to the
          result array.
        </li>
        <li>
          Push remaining elements from both arrays, if any, to the result array.
        </li>
        <li>Return the result array.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="vYqxXXa"
          user="JusmeJr93"
          title="Common Elements in Two Arrays"
        />
      </div>
    </div>
  );
};

// Exercise 2: Find Common Elements in Two Arrays
const Exercise2 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 14: Find Common Elements in Two Arrays
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that takes two arrays and returns an array containing
        the common elements of both arrays.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: [1, 2, 3], [2, 3, 4] <br />
          Output: [2, 3]
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Initialize an empty array to store common elements.</li>
        <li>
          Use a loop to check if elements in the first array are present in the
          second array.
        </li>
        <li>
          If an element is present in both arrays, add it to the common elements
          array.
        </li>
        <li>Return the common elements array.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="YzoZGGv"
          user="JusmeJr93"
          title="Merge Two Sorted Arrays"
        />
      </div>
    </div>
  );
};

// Exercise 3: Remove Duplicates from an Array
const Exercise3 = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Exercise 15: Remove Duplicates from an Array
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that removes duplicate elements from an array and
        returns a new array with unique elements.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: [1, 2, 2, 3, 4, 4] <br />
          Output: [1, 2, 3, 4]
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Initialize an empty array to store unique elements.</li>
        <li>Use a loop to iterate through the input array.</li>
        <li>
          If an element is not already in the unique elements array, add it.
        </li>
        <li>Return the unique elements array.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="gONmwwZ"
          user="JusmeJr93"
          title="Remove Duplicates from an Array"
        />
      </div>
    </div>
  );
};

export default Exercises5;
