import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaChartLine,
  FaTrophy,
  FaUserGraduate,
  FaArrowRight
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";
import React, { useEffect, useState } from "react";
import { getDashboardStats } from "../services/resultService";



function Dashboard() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    const [stats, setStats] = useState({
    quizzesTaken: 0,
    highestScore: 0,
    averageScore: 0,
    rank: 0
});
   useEffect(() => {

    if (user?.role === "ADMIN") {
        navigate("/admin-dashboard");
        return;
    }

    loadDashboardStats();

}, []);

const loadDashboardStats = async () => {

    try {

        const response = await getDashboardStats(user.name);

        setStats(response.data);

    } catch (error) {

        console.log(error);

    }

};

    return (
        <>

        <Navbar />

        <motion.div

        className="dashboard"

        initial={{opacity:0}}

        animate={{opacity:1}}

        transition={{duration:.7}}

        >

        <div className="welcome-card">

        <div>

        <h1>

        Welcome,

        <span>

        {user?.name}

        </span>

        👋

        </h1>

        <p>

        Ready to improve your knowledge today?

        Challenge yourself with quizzes and track your progress.

        </p>

        </div>

        <FaUserGraduate className="student-icon"/>

        </div>
        <div className="stats-grid">

<div className="stat-card">

<h2>📚</h2>

<h3>{stats.quizzesTaken}</h3>

<p>Quizzes Taken</p>

</div>

<div className="stat-card">

<h2>🏆</h2>

<h3>{stats.highestScore}%</h3>

<p>Highest Score</p>

</div>

<div className="stat-card">

<h2>⭐</h2>

<h3>{stats.averageScore}%</h3>

<p>Average Score</p>

</div>

<div className="stat-card">

<h2>🥇</h2>

<h3>#{stats.rank}</h3>

<p>Your Rank</p>

</div>

</div>

        <div className="dashboard-grid">

        <motion.div

        whileHover={{y:-10}}

        className="dashboard-box"

        >

        <FaBookOpen className="dashboard-icon"/>

        <h2>Start Quiz</h2>

        <p>

        Practice subject-wise quizzes.

        </p>

        <button

        onClick={()=>navigate("/quiz-categories")}

        >

        Start

        <FaArrowRight/>

        </button>

        </motion.div>

        <motion.div

        whileHover={{y:-10}}

        className="dashboard-box"

        >

        <FaChartLine className="dashboard-icon"/>

        <h2>Results</h2>

        <p>

        Check your latest performance.

        </p>

        <button

        onClick={()=>navigate("/leaderboard")}

        >

        View

        <FaArrowRight/>

        </button>

        </motion.div>

        <motion.div

        whileHover={{y:-10}}

        className="dashboard-box"

        >

        <FaTrophy className="dashboard-icon"/>

        <h2>Leaderboard</h2>

        <p>

        Compare your ranking with others.

        </p>

        <button

        onClick={()=>navigate("/leaderboard")}

        >

        Open

        <FaArrowRight/>

        </button>

        </motion.div>

        </div>

        </motion.div>

        <Footer/>

        </>

    );

}

export default Dashboard;