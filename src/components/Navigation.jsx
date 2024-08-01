/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

//must receive props of "lessons" or "exercises" to allow the navigation through both
const PageNavigation = () => {
  const days = [
    { range: "Day 1-3", path: `/lessons/day-1-3` },
    { range: "Day 4-6", path: `/lessons/day-4-6` },
    { range: "Day 7-10", path: `/lessons/day-7-10` },
    { range: "Day 11-14", path: `/lessons/day-11-14` },
    { range: "Day 15-18", path: `/lessons/day-15-18` },
    { range: "Day 19-22", path: `/lessons/day-19-22` },
    { range: "Day 23-26", path: `/lessons/day-23-26` },
    { range: "Day 27-30", path: `/lessons/day-27-30` },
  ];

  return (
    <nav className="flex justify-center gap-3 mx-4 mt-20 ">
      <ul className="flex flex-wrap gap-4">
        {days.map((day, index) => (
          <li key={index}>
            <Link
              to={day.path}
              className="bg-blue-200 hover:bg-blue-500 py-2 px-4 rounded-3xl"
            >
              {day.range}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PageNavigation;

{
  /* <div className="flex justify-center gap-3 mx-4 ">
          <h1 className="text-3xl mb-2 text-center font-bold">Lessons For:</h1>
          <ul className=" flex flex-wrap gap-4">
            {roadmap.map((item, index) => (
              <li
                key={index}
                className="flex items-center w-fit bg-blue-200 hover:bg-blue-500 px-4 rounded-3xl"
              >
                <a href={item.href1}>{item.day}</a>
              </li>
            ))}
          </ul>
        </div> */
}
