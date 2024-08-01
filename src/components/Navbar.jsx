import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";

const Navbar = () => {
  //toggle menu for mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="fixed flex justify-center min-w-full left-0 right-0 top-0 bg-blue-500">
        {/* navbar for big screens */}
        <div className="container py-4 hidden md:flex justify-between items-center">
          <div className="">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-800 font-bold  hover:font-extrabold hover:text-white"
            >
              <TbBinaryTree className="text-3xl" />
              <span className="text-2xl">DSA Learning App</span>
            </Link>
          </div>
          <ul className="flex space-x-4">
            <li className="">
              <Link
                to="/"
                className="text-white font-bold hover:text-gray-800  "
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/roadmap"
                className="text-white font-bold hover:text-gray-800 "
              >
                Roadmap
              </Link>
            </li>

            <li>
              <Link
                to="/lessons"
                className="text-white font-bold hover:text-gray-800 "
              >
                Lessons
              </Link>
            </li>

            <li>
              <Link
                to="/exercises"
                className="text-white font-bold hover:text-gray-800 "
              >
                Exercises
              </Link>
            </li>
          </ul>
        </div>

        {/* navbar for small screens */}
        <div className="w-full  md:hidden">
          <div className="container flex items-center justify-between p-4">
            <div className="">
              <Link
                to="/"
                className="flex items-center gap-2 text-white hover:text-gray-800  hover:font-bold"
              >
                <TbBinaryTree className="text-3xl" />
                <span className="text-2xl">DSA Learning App</span>
              </Link>
            </div>
            <button className="focus:outline-none" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-5 text-white " />
              ) : (
                <FaBars className="h-6 w-5 text-white " />
              )}
            </button>
          </div>
          {isMobileMenuOpen && (
            <ul className="container flex flex-col gap-2 items-end mb-2">
              <li className="w-24">
                <Link
                  to="/"
                  className="text-white font-bold hover:text-gray-800 "
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  Home
                </Link>
              </li>

              <li className="w-24">
                <Link
                  to="/roadmap"
                  className="text-white font-bold hover:text-gray-800 "
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  Roadmap
                </Link>
              </li>

              <li className="w-24">
                <Link
                  to="/lessons"
                  className="text-white font-bold hover:text-gray-800 "
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  Lessons
                </Link>
              </li>

              <li className="w-24">
                <Link
                  to="/exercises"
                  className="text-white font-bold hover:text-gray-800 "
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  Exercises
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
