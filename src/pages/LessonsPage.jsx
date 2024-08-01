import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProgressContext from "../context/ProgressContext";
import Lesson1 from "../components/Lessons/Lesson1";
import Lesson2 from "../components/Lessons/Lesson2";
import Lesson3 from "../components/Lessons/Lesson3";
import Lesson4 from "../components/Lessons/Lesson4";
import Lesson5 from "../components/Lessons/Lesson5";
import Lesson6 from "../components/Lessons/Lesson6";
import Lesson7 from "../components/Lessons/Lesson7";
import Lesson8 from "../components/Lessons/Lesson8";
import LessonHome from "../components/Lessons/LessonHome";

const LessonsPage = () => {
  const { day } = useParams();
  const { progress, markCompleted } = useContext(ProgressContext);

  const renderLesson = () => {
    switch (day) {
      case "day-1-3":
        return <Lesson1 />;
      case "day-4-6":
        return <Lesson2 />;
      case "day-7-10":
        return <Lesson3 />;
      case "day-11-14":
        return <Lesson4 />;
      case "day-15-18":
        return <Lesson5 />;
      case "day-19-22":
        return <Lesson6 />;
      case "day-23-26":
        return <Lesson7 />;
      case "day-27-30":
        return <Lesson8 />;

      default:
        return <LessonHome />;
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="container p-4">
        {renderLesson()}
        {[
          "day-1-3",
          "day-4-6",
          "day-7-10",
          "day-11-14",
          "day-15-18",
          "day-19-22",
          "day-23-26",
          "day-27-30",
        ].includes(day) && (
          <div className="flex justify-center">
            <button
              className={`${
                progress[day]?.lesson ? "bg-green-500" : "bg-gray-500"
              } text-white py-2 px-4 rounded-lg mt-4`}
              onClick={() => markCompleted(day, "lesson")}
            >
              {progress[day]?.lesson
                ? "Lesson Completed"
                : "Mark Lesson as Completed"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonsPage;
