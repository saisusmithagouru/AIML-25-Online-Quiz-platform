import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Leaderboard.css";
import { getLeaderboard } from "../services/resultService";

function Leaderboard() {

  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchLeaderboard();
}, []);

const fetchLeaderboard = async () => {
    try {
        const response = await getLeaderboard();
        setStudents(response.data);
    } catch (error) {
        console.error(error);
    }
};

  return (
    <>
      <Navbar />

      <div className="leaderboard">

        <h1>🏆 Leaderboard</h1>

        <thead>

<tr>

<th>🏅 Rank</th>

<th>👤 Student</th>

<th>🏆 Best Score</th>

<th>📚 Quizzes Taken</th>

</tr>

</thead>

<tbody>

{students.map((student,index)=>(

<tr key={index}>

<td>

{index===0?"🥇":
index===1?"🥈":
index===2?"🥉":
index+1}

</td>

<td>

{student.studentName}

</td>

<td>

{student.highestScore}%

</td>

<td>

{student.quizzesTaken}

</td>

</tr>

))}

</tbody>
      </div>

      <Footer />
    </>
  );
}

export default Leaderboard;