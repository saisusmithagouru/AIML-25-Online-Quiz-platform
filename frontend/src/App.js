import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Admin from "./pages/Admin";
import QuizCategories from "./pages/QuizCategories";
import About from "./pages/About";
import Leaderboard from "./pages/Leaderboard";
import Completed from "./pages/Completed";
import AdminDashboard from "./pages/AdminDashboard";
import AddQuestion from "./pages/AddQuestion";
import ManageQuestions from "./pages/ManageQuestions";
import ResultsHistory from "./pages/ResultsHistory";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/quiz-categories" element={<QuizCategories />} />
        <Route path="/about" element={<About />} />


<Route path="/leaderboard" element={<Leaderboard />} />
<Route path="/completed" element={<Completed />} />
<Route path="/admin-dashboard" element={<AdminDashboard/>}/>
<Route path="/add-question"element={<AddQuestion/>}/>
<Route path="/manage-questions" element={<ManageQuestions/>}/>
<Route path="/results" element={<ResultsHistory />} />
<Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;