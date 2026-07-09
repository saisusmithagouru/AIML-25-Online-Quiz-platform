import { Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

import Admin from "./pages/Admin";
import AddQuestion from "./pages/AddQuestion";

import Leaderboard from "./pages/Leaderboard";



function App(){


    return (


        <Routes>


            {/* Public Routes */}


            <Route

            path="/"

            element={<Login />}

            />



            <Route

            path="/register"

            element={<Register />}

            />







            {/* User Routes */}



            <Route

            path="/dashboard"

            element={<Dashboard />}

            />





            <Route

            path="/quiz"

            element={<Quiz />}

            />





            <Route

            path="/result"

            element={<Result />}

            />





            <Route

            path="/leaderboard"

            element={<Leaderboard />}

            />








            {/* Admin Routes */}





            <Route

            path="/admin"

            element={<Admin />}

            />





            <Route

            path="/admin/add"

            element={<AddQuestion />}

            />





        </Routes>


    );


}


export default App;