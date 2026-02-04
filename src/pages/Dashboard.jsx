import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";

const Dashboard =() => {
const navigate = useNavigate();
const[tasks, setTasks]=useState([])

useEffect(()=>{
    fetchdata()
},[])

    
    const fetchdata = async() =>{
        try{
        const respone = await fetch ("http://localhost:3000/tasks");
        const data = respone.json()
        setTasks(data);
    }catch(error){
        console.log(error)
    }
    };


    const handleLogout = () =>{
        localStorage.removeItem("loginData")
        // localStorage.removeItem("authData")
        // localStorage.clear()
        navigate('/login')
    }
    return (
    <div>
        <Navbar title="Task Manegment" onLogout={handleLogout}/>
        <h1>MY TASKS</h1>
        <TaskList/>
    </div>
    );
}

export default Dashboard;
