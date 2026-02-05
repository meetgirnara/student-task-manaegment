import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const fetchdata = async () => {
    try {
      const respone = await fetch("http://localhost:3000/tasks");
      const data = await respone.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('called after API',tasks)
  }, [tasks])
  useEffect(() => {
    fetchdata();
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("loginData");
    // localStorage.removeItem("authData")
    // localStorage.clear()
    navigate("/login");
  };
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Navbar title="Task Manegment" onLogout={handleLogout} />

      <TaskForm onTaskAdded={fetchdata}/>
      <h1>MY TASKS</h1>
      <TaskList tasks={tasks} />

    </div>
  );
};

export default Dashboard;
