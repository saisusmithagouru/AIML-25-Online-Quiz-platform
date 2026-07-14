import { useNavigate } from "react-router-dom";
import {
FaJava,
FaPython,
FaDatabase,
FaRobot,
FaList
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAdminDashboard } from "../services/adminService";
import "../styles/AdminDashboard.css";

function AdminDashboard(){
const [stats,setStats]=useState({
totalStudents:0,
totalQuestions:0,
totalQuizAttempts:0,
totalCategories:0
});
useEffect(()=>{

loadStats();

},[]);

const loadStats = async () => {

  try {

    const response = await getAdminDashboard();

    console.log("Dashboard Response:", response);

    console.log("Dashboard Data:", response.data);

    setStats(response.data);

  } catch (error) {

    console.error("Dashboard Error:", error);

  }

};
const navigate=useNavigate();

const subjects=[

{
title:"Java",
icon:<FaJava/>,
color:"#f97316"
},

{
title:"Python",
icon:<FaPython/>,
color:"#3776AB"
},

{
title:"Database",
icon:<FaDatabase/>,
color:"#16a34a"
},

{
title:"AI & ML",
icon:<FaRobot/>,
color:"#7c3aed"
}

];

return(

<div className="admin-page">

<h1>

Admin Dashboard

</h1>

<p>

Manage your quiz platform

</p>
<div className="stats-grid">

<div className="stat-card">
<h2>{stats.totalStudents}</h2>
<p>Students</p>
</div>

<div className="stat-card">
<h2>{stats.totalQuestions}</h2>
<p>Questions</p>
</div>

<div className="stat-card">
<h2>{stats.totalQuizAttempts}</h2>
<p>Quiz Attempts</p>
</div>

<div className="stat-card">
<h2>{stats.totalCategories}</h2>
<p>Categories</p>
</div>

</div>

<div className="admin-grid">

{

subjects.map((subject,index)=>(

<div

className="admin-card"

key={index}

onClick={() =>
navigate("/add-question",{
state:{
category:subject.title
}
})
}

>

<div

className="admin-icon"

style={{

background:subject.color

}}

>

{subject.icon}

</div>

<h2>

{subject.title}

</h2>

<p>

Add Questions

</p>

</div>

))

}

<div

className="admin-card"

onClick={()=>navigate("/manage-questions")}

>

<div className="admin-icon blue">

<FaList/>

</div>

<h2>

Manage Questions

</h2>

<p>

View & Delete

</p>

</div>

</div>

</div>

);

}

export default AdminDashboard;