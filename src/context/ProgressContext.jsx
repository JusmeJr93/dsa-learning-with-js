/* eslint-disable react/prop-types */
import { useState, createContext, useEffect } from "react";
import lessons from "../data/lessons"; // Import lessons

// Context for the lesson progress state
const ProgressContext = createContext();

const LOCAL_STORAGE_KEY = 'lessonProgress';

export const ProgressProvider = ({ children }) => {
  const [lessonProgress, setLessonProgress] = useState({});
  const [isInitialized, setIsInitialized] = useState(false);

  // Load progress from localStorage or initialize
  useEffect(() => {
    const storedProgress = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedProgress) {
      try {
        setLessonProgress(JSON.parse(storedProgress));
      } catch (error) {
        console.error("Error parsing lesson progress from localStorage:", error);
        // Initialize if an error occurs
        const initialProgress = lessons.reduce((acc, lesson) => {
          acc[lesson.id] = false;
          return acc;
        }, {});
        setLessonProgress(initialProgress);
      }
    } else {
      const initialProgress = lessons.reduce((acc, lesson) => {
        acc[lesson.id] = false;
        return acc;
      }, {});
      setLessonProgress(initialProgress);
    }
    setIsInitialized(true); // Mark as initialized
  }, []); // Runs once on mount

  // Save progress to localStorage when it changes
  useEffect(() => {
    if (isInitialized) { // Only save after initialization
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(lessonProgress));
    }
  }, [lessonProgress, isInitialized]);

  const markLessonAsComplete = (lessonId) => {
    setLessonProgress((prevProgress) => ({
      ...prevProgress,
      [lessonId]: true,
    }));
  };

  const isLessonComplete = (lessonId) => {
    return !!lessonProgress[lessonId];
  };

  return (
    <ProgressContext.Provider
      value={{
        lessonProgress,
        markLessonAsComplete,
        isLessonComplete,
        // Keeping existing context values for now if they are used by exercises,
        // but they are not related to lesson progress.
        // This might need to be refactored later if exercise progress needs change.
        progress: {}, // Placeholder for old progress structure
        markCompleted: () => {}, // Placeholder
        calculateProgressPercentage: () => 0 // Placeholder
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
