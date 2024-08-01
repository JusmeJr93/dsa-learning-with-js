import dsaImg from "../../assets/dsajs.png";

const LessonHome = () => {
  return (
    <div className="flex justify-center">
      <div className="p-8 w-1/2">
        <h1 className="text-3xl font-bold my-4 text-center">
          Welcome to the Lessons Page!
        </h1>
        <p className="text-lg mb-4">
          You&apos;re about to embark on an exciting journey of learning and
          growth. <br /> Get ready to dive into the world of{" "}
          <span className="font-semibold">
            Data Structures and Algorithms with JavaScript
          </span>
          , and master the skills you need to succeed.
        </p>
        <p className="text-lg mb-4">
          Our lessons are designed to be engaging and informative, providing you
          with the knowledge and tools you need to solve complex problems with
          ease.
        </p>
        <p className="text-lg font-bold my-10">
          Ready to get started? Select a day range from the navigation above and
          let&apos;s begin!
        </p>

        <div className="flex justify-center my-10">
          <img src={dsaImg} className="w-full" />
        </div>
        <p className="text-lg italic text-center">
          &quot;The journey of a thousand miles begins with one step.&quot; -
          Lao Tzu
        </p>
      </div>
    </div>
  );
};

export default LessonHome;
