import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getStudentResults } from "../services/resultService";
import "../styles/ResultsHistory.css";

function ResultsHistory() {

    const [results, setResults] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        loadResults();
    }, []);

    const loadResults = async () => {
        try {

            const response = await getStudentResults(user.name);

            console.log(response.data);

            setResults(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    return (
        <>
            <Navbar />

            <div className="history-page">

                <h1>📊 My Quiz Results</h1>

                {results.length === 0 ? (

                    <h2>No Quiz Attempted Yet</h2>

                ) : (

                    <table>

                        <thead>

                            <tr>

                                <th>Subject</th>

                                <th>Total</th>

                                <th>Correct</th>

                                <th>Wrong</th>

                                <th>Percentage</th>

                            </tr>

                        </thead>

                        <tbody>

                            {results.map((r) => (

                                <tr key={r.id}>

                                    <td>{r.category}</td>

                                    <td>{r.totalQuestions}</td>

                                    <td>{r.correctAnswers}</td>

                                    <td>{r.wrongAnswers}</td>

                                    <td>{r.percentage}%</td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                )}

            </div>

            <Footer />

        </>
    );
}

export default ResultsHistory;