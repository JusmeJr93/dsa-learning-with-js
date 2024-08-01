import { useContext } from "react";
import ProgressContext from "../context/ProgressContext";
import { roadmap } from "../data/roadmap";
import roadmapImg from "../assets/roadmap.png";

const RoadmapPage = () => {
  // Use the ProgressContext with useContext
  const { progress, calculateProgressPercentage } = useContext(ProgressContext);

  return (
    <div className="w-full flex justify-center mt-16">
      <div className="p-8 w-2/5">
        <h1 className="text-2xl font-bold mb-4">Roadmap</h1>
        <p className="text-lg">
          Follow this roadmap to learn DSA effectively over 30 days. <br />{" "}
          While completing the lessons, your progress is shown below.
        </p>
        {/* progress percentage */}
        <div className="mt-6 mb-10">
          <div className="w-full bg-gray-300 rounded-full h-6">
            <div
              className="bg-green-500 h-6 text-center rounded-full"
              style={{ width: `${calculateProgressPercentage()}%` }}
            >
              {calculateProgressPercentage()}%
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold my-4">What you&apos;ll learn</h1>

        <ul className="list-disc list-inside space-y-2 mt-4">
          {roadmap.map((item, index) => (
            <li key={index}>
              <span>
                {item.day}: {item.task}
              </span>
              <label className="ml-2  hidden">
                <input
                  type="checkbox"
                  checked={progress[item.day]?.lesson || false}
                  readOnly
                />
                Lesson Completed
              </label>
              <label className="ml-2 hidden">
                <input
                  type="checkbox"
                  checked={progress[item.day]?.exercise || false}
                  readOnly
                />
                Exercise Completed
              </label>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-10">
          <img src={roadmapImg} />
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
