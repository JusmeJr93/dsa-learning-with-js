/* eslint-disable react/prop-types */

import { useState } from "react";
import { createContext } from "react";
import { roadmap } from "../data/roadmap";

// Context for the progress state
const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(
    roadmap.reduce((acc, { day }) => {
      acc[day] = { lesson: false, exercise: false };
      return acc;
    }, {})
  );

  const markCompleted = (day, type) => {
    setProgress((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: true,
      },
    }));
  };

  // Calculate progress based on lessons completed
  const calculateProgressPercentage = () => {
    const totalLessons = roadmap.length; // Each day has one lesson
    const completedLessons = Object.values(progress).reduce(
      (acc, { lesson }) => acc + (lesson ? 1 : 0),
      0
    );
    return Math.round((completedLessons / totalLessons) * 100);
  };

  return (
    <ProgressContext.Provider
      value={{ progress, markCompleted, calculateProgressPercentage }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
