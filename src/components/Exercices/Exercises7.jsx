import CodePenEmbed from "../codePen/CodePenEmbed";

const Exercises7 = () => {
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

// Exercise 1: Find the GCD of Two Numbers
const Exercise1 = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">
        Exercise 19: Find the GCD of Two Numbers
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that computes the Greatest Common Divisor (GCD) of two
        numbers.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: 48, 18 <br />
          Output: 6
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Use the Euclidean algorithm to find the GCD.</li>
        <li>
          While the second number is not zero, replace the first number with the
          second number and the second number with the remainder of the
          division.
        </li>
        <li>Return the first number as the GCD.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="XWLMjNp"
          user="JusmeJr93"
          title="Greatest Common Divisor (GCD) of two numbers"
        />
      </div>
    </div>
  );
};

// Exercise 2: Find the LCM of Two Numbers
const Exercise2 = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">
        Exercise 20: Find the LCM of Two Numbers
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that computes the Least Common Multiple (LCM) of two
        numbers.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: 4, 5 <br />
          Output: 20
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Find the GCD of the two numbers.</li>
        <li>Use the formula: LCM(a, b) = (a * b) / GCD(a, b).</li>
        <li>Return the LCM.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="LYKWRbe"
          user="JusmeJr93"
          title="Least Common Multiple (LCM) of two numbers"
        />
      </div>
    </div>
  );
};

// Exercise 3: Calculate the Sum of Digits of a Number
const Exercise3 = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">
        Exercise 21: Calculate the Sum of Digits of a Number
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Write a function that calculates the sum of the digits of a number.
      </p>
      <h3 className="text-xl font-semibold">Example:</h3>
      <pre className="bg-gray-100 my-2 p-4 rounded">
        <code>
          Input: 1234 <br />
          Output: 10
        </code>
      </pre>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Convert the number to a string.</li>
        <li>Iterate over each character in the string.</li>
        <li>Convert each character back to a number and sum them up.</li>
        <li>Return the sum.</li>
      </ol>

      <h3 className="text-xl font-semibold mt-3">Code:</h3>
      <div className=" mt-2">
        <CodePenEmbed
          slug="YzoZGpv"
          user="JusmeJr93"
          title="Sum of Digits of a Number"
        />
      </div>
    </div>
  );
};

export default Exercises7;
