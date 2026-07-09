import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";

import "../styles/Register.css";


function Register() {


    const navigate = useNavigate();



    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");



    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");







    const register = async (e) => {


        e.preventDefault();



        setError("");

        setSuccess("");



        try {



            await api.post(

                "/users/register",

                {

                    name,

                    email,

                    password,

                    role:"USER"

                }

            );




            setSuccess(

                "Registration Successful! Redirecting..."

            );



            setTimeout(()=>{


                navigate("/");


            },1500);




        }

        catch(error){



            setError(

                "Registration Failed. Email may already exist."

            );



        }


    };








    return (


        <div className="register-page">



            <div className="register-container">



                <h1>

                    Online Quiz

                </h1>



                <h2>

                    Register

                </h2>







                {

                error &&

                (

                    <div className="error-message">

                        {error}

                    </div>

                )

                }








                {

                success &&

                (

                    <div className="success-message">

                        {success}

                    </div>

                )

                }







                <form onSubmit={register}>



                    <input


                        className="register-input"


                        type="text"


                        placeholder="Enter Name"


                        value={name}


                        onChange={(e)=>

                            setName(e.target.value)

                        }


                        required


                    />








                    <input


                        className="register-input"


                        type="email"


                        placeholder="Enter Email"


                        value={email}


                        onChange={(e)=>

                            setEmail(e.target.value)

                        }


                        required


                    />










                    <input


                        className="register-input"


                        type="password"


                        placeholder="Enter Password"


                        value={password}


                        onChange={(e)=>

                            setPassword(e.target.value)

                        }


                        required


                    />









                    <button


                        className="register-button"


                        type="submit"


                    >

                        Register


                    </button>





                </form>








                <p className="register-link">



                    Already have an account?



                    <Link to="/">


                        Login


                    </Link>



                </p>





            </div>




        </div>


    );


}



export default Register;