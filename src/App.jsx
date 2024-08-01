import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LessonsPage from "./pages/LessonsPage";
import ExercisesPage from "./pages/ExercisesPage";
import RoadmapPage from "./pages/RoadmapPage";
import PageNavigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainContent />
      <Footer />
    </Router>
  );
};

//To prevent the Console Error that useLocation hook should be used within a component wrapped by Router
const MainContent = () => {
  //current url location
  const location = useLocation();

  // Determine when to show PageNavigation
  const isLessons = location.pathname.includes("/lessons");
  const navigationNeeded = isLessons;

  return (
    <>
      {/* showing PageNavigation for lessons and exercises, and passing the type props */}
      {navigationNeeded && <PageNavigation />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/lessons/:day" element={<LessonsPage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
      </Routes>
    </>
  );
};

export default App;
