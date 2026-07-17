import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Completed.css";

function Completed() {

    const navigate = useNavigate();
    const { state } = useLocation();

    if (!state) {
        navigate("/dashboard");
        return null;
    }

    const { total, correct, wrong, percentage, status } = state;

    return (
        <>
            <Navbar />

            <div className="completed-container">

                <div className="completed-card">

                    <div className="success-circle">
                        ✓
                    </div>

                    <h1>Test Completed Successfully!</h1>

                    <p>
                        Your quiz has been submitted successfully.
                        Your answers have been evaluated.
                    </p>

                    <div className="info-box">

                        <div className="info">

                            <h2>{total}</h2>

                            <span>Questions</span>

                        </div>

                        <div className="info">

                            <h2>{correct}</h2>

                            <span>Correct</span>

                        </div>
                        <div className="info">

                           <h2>{wrong}</h2>

                             <span>Wrong</span>

                        </div>

                        <div className="info">

                            <h2>{percentage}%</h2>

                            <span>Score</span>

                        </div>
                        <div className={`status-box ${status === "PASS" ? "pass" : "fail"}`}>

    {status === "PASS" ? "🎉 PASS" : "❌ FAIL"}

</div>

                    </div>

                    <button
                        className="view-btn"
                        onClick={() =>
                            navigate("/result", {
                                state: state,
                            })
                        }
                    >
                        View Result →
                    </button>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Completed;