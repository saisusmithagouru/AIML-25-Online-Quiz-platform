import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import { getUser } from "../services/authService";

import "../styles/Dashboard.css";


function Dashboard() {


    const navigate = useNavigate();


    const user = getUser();



    return (

        <>

            <Navbar />


            <div className="dashboard-container">



                <div className="dashboard-header">


                    <div>


                        <h1>

                            Welcome, {user?.name}

                        </h1>


                        <p>

                            Start your quiz and test your knowledge.

                        </p>


                    </div>



                </div>







                <div className="dashboard-cards">



                    <div className="dashboard-card">


                        <h2>

                            Start Quiz

                        </h2>


                        <p>

                            Attempt quizzes and improve your skills.

                        </p>



                        <button

                            className="dashboard-btn"

                            onClick={() => navigate("/quiz")}

                        >

                            Start Quiz

                        </button>



                    </div>








                    <div className="dashboard-card">


                        <h2>

                            Leaderboard

                        </h2>


                        <p>

                            View your ranking and scores.

                        </p>



                        <button

                            className="dashboard-btn"

                            onClick={() => navigate("/leaderboard")}

                        >

                            View Leaderboard

                        </button>



                    </div>









                    {

                    user?.role === "ADMIN" &&


                    <div className="dashboard-card">


                        <h2>

                            Admin Panel

                        </h2>


                        <p>

                            Add and manage quiz questions.

                        </p>



                        <button

                            className="dashboard-btn"

                            onClick={() => navigate("/admin")}

                        >

                            Open Admin

                        </button>



                    </div>


                    }



                </div>









                <div className="profile-card">


                    <h2>

                        Profile Details

                    </h2>




                    <p>

                        <span>Name:</span> {user?.name}

                    </p>




                    <p>

                        <span>Email:</span> {user?.email}

                    </p>




                    <p>

                        <span>Role:</span> {user?.role}

                    </p>




                </div>







            </div>


        </>

    );

}


export default Dashboard;