/* eslint-disable react/no-unescaped-entities */
const Lesson1 = () => {
  return (
    <>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">
          Day 1-3: Introduction and Basics
        </h2>
        <p className="mb-4">
          Welcome to the first lesson! In these initial days, we will cover the
          basics of data structures and algorithms. Understanding these
          fundamentals is crucial for your journey ahead.
        </p>
        <h3 className="text-xl font-bold mb-2">Key Concepts</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>What are data structures and algorithms?</li>
          <li>Importance of data structures in problem-solving</li>
          <li>
            Basic types of data structures: Arrays, Linked Lists, Stacks, and
            Queues
          </li>
          <li>Algorithm efficiency and Big O notation</li>
        </ul>
        <p className="mb-4">
          Understanding these basics will set the foundation for more advanced
          topics. Let's dive in and explore each concept in detail.
        </p>
      </div>

      <div className="p-5">
        <h1 className="text-3xl font-bold mb-4 ">Introduction and Basics</h1>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            1. Introduction to Data Structures and Algorithms
          </h2>
          <p>
            Data Structures and Algorithms (DSA) form the foundational basis for
            writing efficient and optimized code. Data Structures are ways to
            store and organize data, while Algorithms are step-by-step
            procedures or formulas for solving problems.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            2. Importance of Learning DSA
          </h2>
          <ul className="list-disc pl-10">
            <li>Helps in writing efficient and optimized code</li>
            <li>Improves problem-solving skills</li>
            <li>Essential for technical interviews</li>
            <li>Useful in real-world applications</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Basic Terminology</h2>
          <ul className="list-disc  pl-10">
            <li>
              <strong>Data Structure:</strong> A way to store and organize data
              to facilitate access and modifications.
            </li>
            <li>
              <strong>Algorithm:</strong> A step-by-step procedure to solve a
              specific problem.
            </li>
            <li>
              <strong>Time Complexity:</strong> The computational complexity
              that describes the amount of time it takes to run an algorithm.
            </li>
            <li>
              <strong>Space Complexity:</strong> The computational complexity
              that describes the amount of memory space it takes to run an
              algorithm.
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Big-O Notation</h2>
          <p>
            Big-O Notation is a mathematical representation to describe the
            performance or complexity of an algorithm. It gives an upper bound
            on the time or space required by an algorithm in terms of the input
            size.
          </p>
          <ul className="list-disc  pl-10">
            <li>
              <strong>O(1):</strong> Constant time complexity
            </li>
            <li>
              <strong>O(log n):</strong> Logarithmic time complexity
            </li>
            <li>
              <strong>O(n):</strong> Linear time complexity
            </li>
            <li>
              <strong>O(n log n):</strong> Linearithmic time complexity
            </li>
            <li>
              <strong>O(n²):</strong> Quadratic time complexity
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            5. Time and Space Complexity
          </h2>
          <p>
            <strong>Time Complexity:</strong> Measures the time required to
            execute an algorithm as a function of the length of the input.
          </p>
          <p>
            <strong>Space Complexity:</strong> Measures the amount of memory
            space required to execute an algorithm as a function of the length
            of the input.
          </p>
        </section>
      </div>

      {/* <div className="mt-4">
        <h1 className="text-lg font-semibold mb-2">
          1. Introduction to Data Structures and Algorithms
        </h1>
        <p className="pl-5 ">
          <span className="font-medium">Data Structures</span> are ways to
          organize and store data to make it easy to access and modify. <br />{" "}
          Examples include arrays, linked lists, stacks, queues, hash tables,
          trees, and graphs.
        </p>

        <p className="pl-5 pt-3">
          <span className="font-medium">Algorithms</span> are step-by-step
          procedures or formulas for solving a problem. <br /> Examples include
          sorting algorithms (like bubble sort, quick sort) and searching
          algorithms (like binary search).
        </p>
      </div>

      <div className="mt-6">
        <h1 className="text-lg font-semibold mb-2">
          2. Importance of DSA in Programming:
        </h1>
        <p>
          <strong>Data Structures and Algorithms (DSA)</strong> are the backbone
          of computer science. They provide the tools and techniques to
          efficiently store, organize, and manipulate data, as well as solve
          complex problems. Here&apos;s why learning DSA is crucial:
        </p>
        <ul>
          <li>
            <strong>Optimized Code:</strong>
            <ul>
              <li>
                Efficiency: DSA helps you write code that runs faster and uses
                less memory.
              </li>
              <li>
                Scalability: Your programs can handle larger datasets and
                complex operations more effectively.
              </li>
            </ul>
          </li>
          <li>
            <strong>Problem-Solving Skills:</strong>
            <ul>
              <li>
                Logical Thinking: DSA challenges you to think critically and
                break down problems into smaller, manageable steps.
              </li>
              <li>
                Creative Solutions: You&apos;ll develop the ability to come up
                with innovative approaches to solve problems.
              </li>
            </ul>
          </li>
          <li>
            <strong>Career Advancement:</strong>
            <ul>
              <li>
                High-Paying Jobs: Companies seek candidates with strong DSA
                skills, especially in tech giants.
              </li>
              <li>
                Better Opportunities: A solid understanding of DSA opens doors
                to various roles and industries.
              </li>
            </ul>
          </li>
          <li>
            <strong>Interview Preparation:</strong>
            <ul>
              <li>
                Technical Interviews: Most tech companies assess DSA knowledge
                through coding challenges.
              </li>
              <li>
                Confidence: Mastering DSA boosts your confidence in technical
                interviews.
              </li>
            </ul>
          </li>
          <li>
            <strong>Real-World Applications:</strong>
            <ul>
              <li>
                Software Development: DSA is used in building everything from
                operating systems to web applications.
              </li>
              <li>
                Data Science: Efficient algorithms are essential for processing
                and analyzing large datasets.
              </li>
            </ul>
          </li>
          <li>
            <strong>Foundation for Further Learning:</strong>
            <ul>
              <li>
                Advanced Topics: DSA is a prerequisite for learning more complex
                algorithms and data structures.
              </li>
              <li>
                Continuous Improvement: It provides a strong base for lifelong
                learning in computer science.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>
            In essence, learning DSA equips you with the skills to build
            efficient, scalable, and robust software solutions.
          </strong>
        </p>
      </div> */}
    </>
  );
};

export default Lesson1;
