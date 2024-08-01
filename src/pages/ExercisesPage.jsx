/* eslint-disable react/no-unescaped-entities */
import Exercises1 from "../components/Exercices/Exercises1";
import Exercises2 from "../components/Exercices/Exercises2";
import Exercises3 from "../components/Exercices/Exercises3";
import Exercises4 from "../components/Exercices/Exercises4";
import Exercises5 from "../components/Exercices/Exercises5";
import Exercises6 from "../components/Exercices/Exercises6";
import Exercises7 from "../components/Exercices/Exercises7";
import Exercises8 from "../components/Exercices/Exercises8";
import ExerciseHome from "../components/Exercices/ExerciseHome";

const ExercisesPage = () => {
  return (
    <div className="w-full flex justify-center mt-16">
      <div className="container">
        <ExerciseHome />
        <Exercises1 />
        <Exercises2 />
        <Exercises3 />
        <Exercises4 />
        <Exercises5 />
        <Exercises6 />
        <Exercises7 />
        <Exercises8 />
      </div>
    </div>
  );
};

export default ExercisesPage;
