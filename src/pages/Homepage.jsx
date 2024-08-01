const Homepage = () => {
  return (
    <div className="w-full flex justify-center my-16">
      <main className="container p-8 space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Ultimate DSA Learning App
          </h1>
          <p className="text-lg">
            Your journey to mastering Data Structures and Algorithms starts
            here.
          </p>
        </section>

        <section className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Why This App?</h2>
          <p className="text-lg">
            This app is designed to help you learn Data Structures and
            Algorithms (DSA) in a structured and interactive way. Whether
            you&apos;re preparing for coding interviews, aiming to improve your
            problem-solving skills, or just curious about DSA, this app provides
            comprehensive lessons and exercises to guide you through the
            learning process.
          </p>
        </section>

        <section className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Why Learn DSA?</h2>
          <p className="text-lg">
            Understanding Data Structures and Algorithms is crucial for any
            software engineer. It helps you write efficient and optimized code,
            solve complex problems, and improve your overall coding skills. DSA
            knowledge is also essential for acing technical interviews at top
            tech companies.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Improves problem-solving skills.</li>
            <li>Essential for technical interviews.</li>
            <li>Helps in writing efficient code.</li>
            <li>Fundamental for advanced topics in computer science.</li>
          </ul>
        </section>

        <section className="bg-yellow-100 p-6 rounded-lg shadow-md ">
          <h2 className="text-3xl font-semibold mb-4">How to Use This App?</h2>
          <p className="text-lg">
            Start with the basics and gradually move to advanced topics. Follow
            the lessons in sequence, and practice the exercises to reinforce
            your learning. Use the roadmap to plan your study schedule and track
            your progress.
          </p>
          <div className="mt-4 space-y-2">
            <p>
              1. Follow the&nbsp;
              <a href="/roadmap" className="text-blue-500 underline">
                Roadmap
              </a>
              &nbsp;to stay on track.
            </p>
            <p>
              2. Navigate to the&nbsp;
              <a href="/lessons" className="text-blue-500 underline">
                Lessons
              </a>
              &nbsp;page to start learning.
            </p>
            <p>
              3. Practice what you’ve learned on the&nbsp;
              <a href="/exercises" className="text-blue-500 underline">
                Exercises
              </a>
              &nbsp;page.
            </p>
          </div>
        </section>

        {/* <section className="bg-purple-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-lg">
            Join our community of learners and developers. Share your progress,
            ask questions, and collaborate with others. Together, we can achieve
            more.
          </p>
          <p className="mt-4">Connect with us on:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-blue-500">
              Twitter
            </a>
            <a href="#" className="text-blue-500">
              Facebook
            </a>
            <a href="#" className="text-blue-500">
              LinkedIn
            </a>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default Homepage;
