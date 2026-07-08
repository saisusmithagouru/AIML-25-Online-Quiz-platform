import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import {
    getAllQuestions,
    deleteQuestion
} from "../services/quizService";




function Admin() {


    const navigate = useNavigate();


    const [questions, setQuestions] = useState([]);





    useEffect(()=>{


        loadQuestions();


    }, []);








    const loadQuestions = ()=>{


        getAllQuestions()

        .then((response)=>{


            setQuestions(response.data);


        })

        .catch(()=>{


            alert(

                "Unable to load questions"

            );


        });


    };









    const handleDelete = (id)=>{


        const confirmDelete = window.confirm(

            "Are you sure you want to delete this question?"

        );



        if(confirmDelete){



            deleteQuestion(id)

            .then(()=>{


                alert(

                    "Question deleted successfully"

                );


                loadQuestions();


            })

            .catch(()=>{


                alert(

                    "Delete failed"

                );


            });



        }



    };









    return (

        <>


        <Navbar />




        <div className="admin-container">





            <div className="admin-header">



                <h1>

                    Admin Dashboard

                </h1>




                <button

                className="admin-btn"

                onClick={()=>navigate("/admin/add")}

                >

                    Add Question


                </button>




            </div>









            <div className="question-list">



                <h2>

                    Manage Questions

                </h2>








                {

                questions.length === 0 ?



                (

                    <p>

                        No Questions Available

                    </p>

                )



                :



                (

                <table>



                    <thead>


                        <tr>


                            <th>

                                ID

                            </th>



                            <th>

                                Question

                            </th>



                            <th>

                                Category

                            </th>



                            <th>

                                Difficulty

                            </th>



                            <th>

                                Action

                            </th>


                        </tr>


                    </thead>









                    <tbody>



                    {

                    questions.map((question)=>(



                        <tr key={question.id}>


                            <td>

                                {question.id}

                            </td>





                            <td>

                                {question.questionTitle}

                            </td>





                            <td>

                                {question.category}

                            </td>





                            <td>

                                {question.difficultyLevel}

                            </td>






                            <td>



                                <button

                                className="delete-btn"

                                onClick={()=>handleDelete(question.id)}

                                >

                                    Delete


                                </button>



                            </td>




                        </tr>



                    ))

                    }



                    </tbody>





                </table>


                )


                }




            </div>







        </div>





        </>


    );


}


export default Admin;