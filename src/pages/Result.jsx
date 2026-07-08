import { Link } from "react-router-dom";

function Result() {

    const score = localStorage.getItem("score");

    const total = localStorage.getItem("total");

    return (

        <div className="container">

            <h1>

                Quiz Completed

            </h1>

            <br />

            <h2>

                Score

            </h2>

            <h1>

                {score} / {total}

            </h1>

            <br />

            <Link to="/dashboard">

                <button>

                    Back To Dashboard

                </button>

            </Link>

        </div>

    );

}

export default Result;