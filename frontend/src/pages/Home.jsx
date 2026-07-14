import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaGraduationCap,
  FaChartLine,
  FaTrophy,
  FaLaptopCode
} from "react-icons/fa";
import "../styles/Home.css";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Navbar />

      <motion.section
  className="home"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>

        <div className="hero-left">

          <span className="badge">🚀 #1 Smart Online Quiz Platform</span>

          <h1>
            Learn Smarter.
            <br />
            Challenge Yourself.
            <br />
            <span>Achieve More.</span>
          </h1>

          <p>
            Master every subject with interactive quizzes, real-time score
            tracking, leaderboards, and detailed performance analytics.
            Learn, compete, and improve—all in one place.
          </p>

          <div className="buttons">

{!user && (

<>

<Link to="/login">

<button className="primary-btn">

Start Quiz

</button>

</Link>

<Link to="/register">

<button className="secondary-btn">

Create Account

</button>

</Link>

</>

)}

{user?.role==="STUDENT" && (

<Link to="/dashboard">

<button className="primary-btn">

Go to Dashboard

</button>

</Link>

)}

{user?.role==="ADMIN" && (

<Link to="/admin-dashboard">

<button className="primary-btn">

Go to Admin Dashboard

</button>

</Link>

)}

</div>

          <div className="stats">

            <div className="stat-box">
              <h2>
  <CountUp end={1000} duration={3} />+
</h2>
              <p>Students</p>
            </div>

            <div className="stat-box">
              <h2>
  <CountUp end={500} duration={3} />+
</h2>
              <p>Quizzes</p>
            </div>

            <div className="stat-box">
              <h2>
  <CountUp end={98} duration={3} />%
</h2>
              <p>Success Rate</p>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="image-card">

            <img
              src="https://illustrations.popsy.co/amber/digital-nomad.svg"
              alt="Quiz Illustration"
            />

          </div>

        </div>

      </motion.section>

      <section className="features">

  <motion.div
    whileHover={{ y: -12, scale: 1.05 }}
    className="card"
  >
    <FaGraduationCap className="feature-icon" />
    <h2>Interactive Learning</h2>
    <p>
      Practice subject-wise quizzes with instant feedback and improve your skills.
    </p>
  </motion.div>

  <motion.div
    whileHover={{ y: -12, scale: 1.05 }}
    className="card"
  >
    <FaChartLine className="feature-icon" />
    <h2>Performance Analytics</h2>
    <p>
      View detailed statistics and monitor your learning progress.
    </p>
  </motion.div>

  <motion.div
    whileHover={{ y: -12, scale: 1.05 }}
    className="card"
  >
    <FaTrophy className="feature-icon" />
    <h2>Leaderboard</h2>
    <p>
      Compete with friends and achieve the highest ranking.
    </p>
  </motion.div>

  <motion.div
    whileHover={{ y: -12, scale: 1.05 }}
    className="card"
  >
    <FaLaptopCode className="feature-icon" />
    <h2>Multiple Technologies</h2>
    <p>
      Java, Python, Database, AI, C++, Web Development and more.
    </p>
  </motion.div>

</section>

      <Footer />
    </>
  );
}

export default Home;