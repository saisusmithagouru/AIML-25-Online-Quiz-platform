import React,{useState} from "react";
import {useLocation,useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {addQuestion} from "../services/quizService";
import "../styles/AddQuestion.css";

function AddQuestion(){

const navigate=useNavigate();

const location=useLocation();

const category=location.state?.category || "";

const [question,setQuestion]=useState({

questionTitle:"",

option1:"",

option2:"",

option3:"",

option4:"",

rightAnswer:"",

difficultyLevel:"Easy",

category:category

});

const handleChange=(e)=>{

setQuestion({

...question,

[e.target.name]:e.target.value

});

};

const handleSubmit=async(e)=>{

e.preventDefault();

try{

await addQuestion(question);

alert("Question Added Successfully 🎉");

navigate("/admin-dashboard");

}

catch(error){

console.log(error);

alert("Failed to Add Question");

}

};

return(

<>

<Navbar/>

<div className="add-page">

<div className="add-card">

<h1>

Add {category} Question

</h1>

<p>

Create new quiz questions for students.

</p>

<form onSubmit={handleSubmit}><input
type="text"
name="questionTitle"
placeholder="Enter Question"
value={question.questionTitle}
onChange={handleChange}
required
/>

<input
type="text"
name="option1"
placeholder="Option A"
value={question.option1}
onChange={handleChange}
required
/>

<input
type="text"
name="option2"
placeholder="Option B"
value={question.option2}
onChange={handleChange}
required
/>

<input
type="text"
name="option3"
placeholder="Option C"
value={question.option3}
onChange={handleChange}
required
/>

<input
type="text"
name="option4"
placeholder="Option D"
value={question.option4}
onChange={handleChange}
required
/>

<select
name="rightAnswer"
value={question.rightAnswer}
onChange={handleChange}
required
>

<option value="">
Select Correct Answer
</option>

<option value={question.option1}>
Option A
</option>

<option value={question.option2}>
Option B
</option>

<option value={question.option3}>
Option C
</option>

<option value={question.option4}>
Option D
</option>

</select>

<select
name="difficultyLevel"
value={question.difficultyLevel}
onChange={handleChange}
>

<option value="Easy">
Easy
</option>

<option value="Medium">
Medium
</option>

<option value="Hard">
Hard
</option>

</select>

<input
type="text"
name="category"
value={category}
readOnly
/>

<button
type="submit"
>
Add Question
</button>

</form>
</div>

</div>

<Footer/>

</>

);

}

export default AddQuestion;