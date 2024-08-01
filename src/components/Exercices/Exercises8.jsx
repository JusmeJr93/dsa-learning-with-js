/* eslint-disable react/no-unescaped-entities */
import CodePenEmbed from "../codePen/CodePenEmbed";

const Exercises8 = () => {
  return (
    <div className="px-10">
      <Exercise1 />
      <hr className="my-8" />
      <Exercise2 />
      <hr className="my-8" />
      <Exercise3 />
      <hr className="my-8" />
    </div>
  );
};

// Stacks and Queues
const Exercise1 = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">
        Exercise 22: Implement a Stack Using Arrays
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Implement a stack using arrays in JavaScript. A stack follows the LIFO
        (Last In, First Out) principle. This means the last element added to the
        stack is the first one to be removed. So, we essentially treat one end
        of the array as the "top" of the stack.
      </p>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Create an array to hold the stack elements.</li>
        <li>
          Initialize a top pointer to keep track of the index of the top element
          in the stack. Initially, it's set to -1 to indicate an empty stack.
        </li>
        <li>
          Implement Stack operations to: add an element, remove an element,
          check if the stack is empty, etc.
          <ul className="list-disc list-inside ml-3">
            <span className="font-semibold ml-[-1rem]">Stack Operations:</span>
            <li>push: Adds an element to the top.</li>
            <li>pop: Removes and returns the top element.</li>
            <li>peek: Returns the top element without removing it.</li>
            <li>isEmpty: Checks if the stack is empty.</li>
            <li>size: Returns the number of elements in the stack.</li>
          </ul>
        </li>
      </ol>
      <h3 className="text-xl font-semibold  mt-3">Code:</h3>

      <div className=" mt-2">
        <CodePenEmbed
          slug="ZEdepoe"
          user="JusmeJr93"
          title="Implement a Stack Using Arrays"
        />
      </div>
    </div>
  );
};

// Stacks and Queues
const Exercise2 = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">
        Exercise 23: Implement a Queue Using Arrays
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Implement a queue using arrays in JavaScript. A queue follows the FIFO
        (First In, First Out) principle. This means the first element added to
        the queue is the first one to be removed. For a queue, we treat one end
        of the array as the "front" and the other end as the "rear".
      </p>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Create an array to hold the queue elements.</li>
        <li>
          Implement Stack operations to: add an element, remove an element,
          check if the stack is empty, etc.
          <ul className="list-disc  list-inside ml-3">
            <span className="font-semibold ml-[-1rem]">Queue Operations:</span>
            <li>enqueue: Adds an element to the rear.</li>
            <li>dequeue: Removes and returns the front element.</li>
            <li>peek: Returns the front element without removing it.</li>
            <li>isEmpty: Checks if the queue is empty.</li>
            <li>size: Returns the number of elements in the queue. </li>
          </ul>
        </li>
      </ol>
      <h3 className="text-xl font-semibold  mt-3">Code:</h3>

      <div className=" mt-2">
        <CodePenEmbed
          slug="vYqxyZY"
          user="JusmeJr93"
          title="Implement a Queue Using Arrays"
        />
      </div>
    </div>
  );
};

// Stacks and Queues
const Exercise3 = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">
        Exercise 24: Evaluate an Expression Using Stack
      </h1>
      <h3 className="text-xl font-semibold">Description:</h3>
      <p className="mb-4">
        Evaluate a postfix expression using a stack. For example, the postfix
        expression "23*54*+9-" evaluates to 17.
      </p>
      <h3 className="text-xl font-semibold">Step-by-Step Solution:</h3>
      <ol className="ml-4 list-decimal">
        <li>Create an empty stack.</li>
        <li>Scan the postfix expression from left to right.</li>
        <li>
          If the scanned character is an operand (number), push it onto the
          stack.
        </li>
        <li>
          If the scanned character is an operator (like +, -, , /):
          <ul className="list-disc list-inside">
            <li>Pop the top two elements from the stack.</li>
            <li>
              Perform the operation using the popped elements as operands.
            </li>
            <li>Push the result back onto the stack.</li>
          </ul>
        </li>
        <li>Repeat steps 3 and 4 until the end of the expression.</li>
        <li>The final result will be the top element of the stack.</li>
      </ol>
      <h3 className="text-xl font-semibold  mt-3">Code:</h3>

      <div className=" mt-2">
        <CodePenEmbed
          slug="LYKWbLo"
          user="JusmeJr93"
          title="Evaluate an Expression Using Stack"
        />
      </div>
    </div>
  );
};

export default Exercises8;
