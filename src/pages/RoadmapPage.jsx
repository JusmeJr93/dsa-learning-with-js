import { useContext } from "react";
import ProgressContext from "../context/ProgressContext";
import { roadmap } from "../data/roadmap";
import lessons from "../data/lessons"; // Import all lessons
import roadmapImg from "../assets/roadmap.png";

// Helper to find lesson IDs based on roadmap task title
const getLessonIdsForRoadmapTask = (taskTitle) => {
    const title = taskTitle.toLowerCase();
    // This mapping needs to be robust. Consider adding lessonId(s) to roadmap.js items in future.
    if (title.includes("introduction and basics")) return [1];
    if (title.includes("arrays")) return [2];
    if (title.includes("stacks and queues")) return [4, 5]; // Lesson ID 4 for Stacks, 5 for Queues
    if (title.includes("linked lists")) return [3];
    if (title.includes("trees")) return [7];
    if (title.includes("heaps")) return [9];
    if (title.includes("graphs")) return [8];
    if (title.includes("hash tables")) return [6];
    // Add mappings for other lessons if they are part of the roadmap
    // For example, if roadmap included "Sorting Algorithms", "Searching Algorithms" etc.
    // if (title.includes("sorting algorithms")) return [10];
    // if (title.includes("searching algorithms")) return [11];
    // if (title.includes("graph algorithms")) return [12]; // Note: "Graphs" (lesson 8) is different from "Graph Algorithms" (lesson 12)
    // if (title.includes("dynamic programming")) return [13];
    return []; // No specific lesson mapped or task not found
};


const RoadmapPage = () => {
  const { isLessonComplete, calculateProgressPercentage } = useContext(ProgressContext);

  return (
    <div className="w-full flex justify-center mt-16">
      <div className="p-8 w-2/5">
        <h1 className="text-2xl font-bold mb-4">Roadmap</h1>
        <p className="text-lg">
          Follow this roadmap to learn DSA effectively over 30 days. <br />{" "}
          While completing the lessons, your progress is shown below.
        </p>
        {/* progress percentage - uses placeholder from context for now */}
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
          {roadmap.map((item, index) => {
            const lessonIds = getLessonIdsForRoadmapTask(item.task);
            const isTaskConsideredComplete = lessonIds.length > 0 && lessonIds.every(id => isLessonComplete(id));

            // Find the lesson titles for display if needed, good for clarity
            const lessonTitles = lessonIds.map(id => lessons.find(l => l.id === id)?.title).filter(Boolean).join(' & ');

            return (
              <li key={index} className={`flex items-center ${isTaskConsideredComplete ? "text-green-600" : "text-gray-700"}`}>
                {isTaskConsideredComplete ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-green-500">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.06 0l4-5.5Z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-gray-400">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.06 0l4-5.5Z" clipRule="evenodd" style={{opacity: 0.3}}/>
                  </svg>
                )}
                <span>
                  {item.day}: {item.task}
                  {lessonTitles && <span className="text-sm text-gray-500 ml-2">({lessonTitles})</span>}
                </span>
                {/* The old hidden checkboxes are removed as completion is now indicated by icon/text color */}
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center mt-10">
          <img src={roadmapImg} alt="Roadmap Visual" />
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
