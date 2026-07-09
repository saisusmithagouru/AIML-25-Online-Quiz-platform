import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";

import { setUser } from "../utils/auth";

import "../styles/Login.css";



function Login() {


    const navigate = useNavigate();



    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");







    const login = async (e) => {


        e.preventDefault();


        setError("");



        try {


            const response = await api.post(

                "/users/login",

                {

                    email,

                    password

                }

            );





            // Save user details in localStorage

            setUser(response.data);






            alert(

                "Login Successful"

            );






            // Role based navigation


            if(response.data.role === "ADMIN"){


                navigate("/admin");


            }

            else{


                navigate("/dashboard");


            }






        }

        catch(error){



            setError(

                "Invalid Email or Password"

            );



        }



    };









    return (



        <div className="login-page">





            <div className="login-container">





                <h1>

                    Online Quiz

                </h1>





                <h2>

                    Login

                </h2>









                {

                error &&


                <div className="error-message">


                    {error}


                </div>


                }









                <form onSubmit={login}>







                    <input


                        className="login-input"


                        type="email"


                        placeholder="Enter Email"


                        value={email}


                        onChange={(e)=>

                            setEmail(e.target.value)

                        }


                        required


                    />









                    <input


                        className="login-input"


                        type="password"


                        placeholder="Enter Password"


                        value={password}


                        onChange={(e)=>

                            setPassword(e.target.value)

                        }


                        required


                    />









                    <button


                        className="login-button"


                        type="submit"


                    >

                        Login


                    </button>








                </form>









                <p className="login-link">


                    Don't have an account?



                    <Link to="/register">


                        Register


                    </Link>



                </p>







            </div>





        </div>



    );


}



export default Login;