import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import {
    getAllQuestions,
    submitQuizResult
} from "../services/quizService";

import "../styles/Quiz.css";


function Quiz() {


    const navigate = useNavigate();


    const [questions, setQuestions] = useState([]);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answers, setAnswers] = useState({});

    const [loading, setLoading] = useState(true);






    // Load questions

    useEffect(() => {


        getAllQuestions()

        .then((response)=>{


            setQuestions(response.data);

            setLoading(false);


        })

        .catch(()=>{


            alert("Unable to load questions");

            setLoading(false);


        });


    }, []);








    // Select answer

    const selectAnswer = (answer)=>{


        setAnswers({

            ...answers,

            [currentQuestion]: answer

        });


    };








    // Next question

    const nextQuestion = ()=>{


        if(currentQuestion < questions.length - 1){


            setCurrentQuestion(

                currentQuestion + 1

            );


        }


    };








    // Previous question

    const previousQuestion = ()=>{


        if(currentQuestion > 0){


            setCurrentQuestion(

                currentQuestion - 1

            );


        }


    };









    // Submit quiz

    const submitQuiz = ()=>{


        let score = 0;



        questions.forEach((question,index)=>{


            if(

                answers[index] === question.rightAnswer

            ){

                score++;

            }


        });






        const user = JSON.parse(

            localStorage.getItem("user")

        );





        const result = {


            userId:user.id,


            score:score,


            totalQuestions:questions.length


        };







        submitQuizResult(result)

        .then(()=>{



            localStorage.setItem(

                "score",

                score

            );



            localStorage.setItem(

                "total",

                questions.length

            );



            navigate("/result");



        })


        .catch(()=>{


            alert(

                "Unable to save result"

            );


        });



    };









    if(loading){


        return (

            <div className="loading">

                Loading Questions...

            </div>

        );


    }







    if(questions.length===0){


        return (

            <div className="loading">

                No Questions Found

            </div>

        );


    }







    const question = questions[currentQuestion];






    return (

        <>


        <Navbar />



        <div className="quiz-page">



            <div className="quiz-container">





                <div className="quiz-header">


                    <h2>

                        Online Quiz

                    </h2>



                    <div className="timer-box">


                        <Timer

                            duration={300}

                            onTimeUp={submitQuiz}

                        />


                    </div>



                </div>








                <p className="question-number">


                    Question {currentQuestion + 1}

                    {" "}of{" "}

                    {questions.length}


                </p>









                <h2 className="question-title">


                    {question.questionTitle}


                </h2>









                <div className="options-container">





                    <button

                    className={

                    answers[currentQuestion] === question.option1

                    ?

                    "option-button selected"

                    :

                    "option-button"

                    }


                    onClick={()=>selectAnswer(question.option1)}

                    >

                        {question.option1}


                    </button>







                    <button

                    className={

                    answers[currentQuestion] === question.option2

                    ?

                    "option-button selected"

                    :

                    "option-button"

                    }


                    onClick={()=>selectAnswer(question.option2)}

                    >

                        {question.option2}


                    </button>








                    <button

                    className={

                    answers[currentQuestion] === question.option3

                    ?

                    "option-button selected"

                    :

                    "option-button"

                    }


                    onClick={()=>selectAnswer(question.option3)}

                    >

                        {question.option3}


                    </button>








                    <button

                    className={

                    answers[currentQuestion] === question.option4

                    ?

                    "option-button selected"

                    :

                    "option-button"

                    }


                    onClick={()=>selectAnswer(question.option4)}

                    >

                        {question.option4}


                    </button>





                </div>









                <div className="quiz-actions">





                    <button

                    className="quiz-btn"

                    disabled={currentQuestion===0}

                    onClick={previousQuestion}

                    >

                        Previous


                    </button>









                    {

                    currentQuestion === questions.length - 1

                    ?

                    (

                    <button

                    className="quiz-btn submit-btn"

                    onClick={submitQuiz}

                    >

                        Submit Quiz


                    </button>


                    )

                    :

                    (

                    <button

                    className="quiz-btn"

                    onClick={nextQuestion}

                    >

                        Next


                    </button>


                    )


                    }





                </div>







            </div>





        </div>



        </>


    );

}



export default Quiz;