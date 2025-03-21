import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import CollegePage from "./pages/CollegePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:collegeId" element={<CollegePage />} />
      </Routes>
    </Router>
  );
}
