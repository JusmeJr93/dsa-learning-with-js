import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProgressContext from "../context/ProgressContext";
import lessons from "../data/lessons"; // Import lessons data
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
  // Use the new context functions for lesson progress
  const { markLessonAsComplete, isLessonComplete } = useContext(ProgressContext);

  // Mapping from 'day' URL parameter to lessonId.
  // This assumes a fixed correspondence between the legacy "day-X-Y" routes
  // and the lesson IDs from lessons.js.
  // This might need adjustment if the actual lesson content mapping is different.
  const dayToLessonIdMap = {
    "day-1-3": 1,   // Corresponds to "Introduction to DSA and Big O Notation"
    "day-4-6": 2,   // Corresponds to "Arrays"
    "day-7-10": 3,  // Corresponds to "Linked Lists"
    "day-11-14": 4, // Corresponds to "Stacks"
    "day-15-18": 5, // Corresponds to "Queues"
    "day-19-22": 6, // Corresponds to "Hash Tables"
    "day-23-26": 7, // Corresponds to "Trees"
    "day-27-30": 8, // Corresponds to "Graphs"
    // Add more mappings if Lesson9, Lesson10 etc. components exist and are routed
  };

  const currentLessonId = dayToLessonIdMap[day];
  const lesson = lessons.find(l => l.id === currentLessonId); // Get lesson details for title etc.

  const renderLesson = () => {
    // The LessonX components might be static or need refactoring later
    // to dynamically load content from lessons.js based on currentLessonId.
    // For this task, we focus on the completion button.
    switch (day) {
      case "day-1-3":
        return <Lesson1 lesson={lesson} />; // Pass lesson data if needed by component
      case "day-4-6":
        return <Lesson2 lesson={lesson} />;
      case "day-7-10":
        return <Lesson3 lesson={lesson} />;
      case "day-11-14":
        return <Lesson4 lesson={lesson} />;
      case "day-15-18":
        return <Lesson5 lesson={lesson} />;
      case "day-19-22":
        return <Lesson6 lesson={lesson} />;
      case "day-23-26":
        return <Lesson7 lesson={lesson} />;
      case "day-27-30":
        return <Lesson8 lesson={lesson} />;
      default:
        return <LessonHome />;
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="container p-4">
        {renderLesson()}
        {currentLessonId && lesson && ( // Check if it's a valid lesson page
          <div className="flex justify-center mt-6">
            <button
              className={`text-white py-2 px-4 rounded-lg ${
                isLessonComplete(currentLessonId)
                  ? "bg-green-500 hover:bg-green-600 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => {
                if (!isLessonComplete(currentLessonId)) {
                  markLessonAsComplete(currentLessonId);
                }
              }}
              disabled={isLessonComplete(currentLessonId)}
            >
              {isLessonComplete(currentLessonId)
                ? "Lesson Completed"
                : "Mark Lesson as Complete"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonsPage;
