/* eslint-disable react/no-unescaped-entities */
const Exercises1 = () => {
  return (
    <div className="pl-10">
      <hr className="my-8" />
      <Exercise1 />
      <hr className="my-8" />
      <Exercise2 />
      <hr className="my-8" />
      <Exercise3 />
      <hr className="my-8" />
    </div>
  );
};

const Exercise1 = () => {
  // Exercise 1: Analyze Time and Space Complexity
  const analyzeComplexity = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Exercise 1: Analyze Time and Space Complexity
        </h2>
        <p>
          <span className="font-medium">Task: </span>
          Analyze the time and space complexity of the following code snippet:
        </p>
        <pre className="bg-gray-100 my-2 p-4 rounded">
          <code>
            {`function exampleFunction(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}`}
          </code>
        </pre>
        <p>
          <strong>Solution:</strong>
        </p>
        <ol className="list-decimal pl-5">
          <li>
            <strong>Time Complexity:</strong> O(n)
            <br />
            <span className="font-medium">Explanation: </span> The function
            iterates over each element in the array exactly once. The loop runs
            "n" times where "n" is the length of the array. Therefore, the time
            complexity is linear, O(n).
          </li>
          <li>
            <strong>Space Complexity:</strong> O(1)
            <br />
            <span className="font-medium">Explanation: </span> The function uses
            a fixed amount of extra space: a few variables ("sum", "i"). This
            space requirement does not grow with the size of the input array, so
            the space complexity is constant, O(1).
          </li>
        </ol>
      </div>
    );
  };

  return <div>{analyzeComplexity()}</div>;
};

// Exercise 2: Big-O Notation
const Exercise2 = () => {
  // Exercise 2: Convert Algorithm Description to Big-O Notation
  const bigONotation = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Exercise 2: Big-O Notation
        </h2>
        <p>
          **Task:** Given the following descriptions of algorithms, write their
          Big-O notation:
        </p>
        <ul className="list-disc pl-5">
          <li>
            **Algorithm 1:** A function that performs a binary search on a
            sorted array.
            <br />
            <strong>Solution:</strong> O(log n)
            <br />
            **Explanation:** Binary search divides the search space in half with
            each iteration. The number of iterations required is proportional to
            the logarithm of the number of elements, so the time complexity is
            logarithmic, O(log n).
          </li>
          <li>
            **Algorithm 2:** A function that performs nested loops over an array
            of size "n".
            <br />
            <strong>Solution:</strong> O(n²)
            <br />
            **Explanation:** The function contains nested loops, each iterating
            "n" times. This results in a total of "n * n" operations, so the
            time complexity is quadratic, O(n²).
          </li>
          <li>
            **Algorithm 3:** A function that performs a single pass over an
            array to find the maximum element.
            <br />
            <strong>Solution:</strong> O(n)
            <br />
            **Explanation:** The function scans through each element of the
            array exactly once to find the maximum. Thus, the time complexity is
            linear, O(n).
          </li>
        </ul>
      </div>
    );
  };

  return <div>{bigONotation()}</div>;
};

// Exercise 3: Understanding Big-O Notation
const Exercise3 = () => {
  // Exercise 3: Understanding Big-O Notation
  const bigOUnderstanding = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Exercise 3: Understanding Big-O Notation
        </h2>
        <p>
          **Task:** Consider the following two algorithms. Determine which one
          has better performance in terms of Big-O notation.
        </p>
        <pre className="bg-gray-100  my-2 p-4 rounded">
          <code>
            {`Algorithm A:
function A(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + arr[j]);
    }
  }
}

Algorithm B:
function B(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}`}
          </code>
        </pre>
        <p>
          <strong>Solution:</strong>
        </p>
        <ol className="list-decimal pl-5">
          <li>
            <strong>Algorithm A:</strong> O(n²)
            <br />
            **Explanation:** Algorithm A contains nested loops, where each loop
            iterates `n` times. This results in a total of `n * n` operations.
            Therefore, the time complexity is quadratic, O(n²).
          </li>
          <li>
            <strong>Algorithm B:</strong> O(n)
            <br />
            **Explanation:** Algorithm B contains a single loop that iterates
            `n` times. The time complexity is linear, O(n), as it performs a
            constant amount of work per iteration.
          </li>
        </ol>
        <p>
          **Conclusion:** Algorithm B has better performance in terms of Big-O
          notation because it has linear time complexity compared to the
          quadratic time complexity of Algorithm A.
        </p>
      </div>
    );
  };

  return <div>{bigOUnderstanding()}</div>;
};

export default Exercises1;
