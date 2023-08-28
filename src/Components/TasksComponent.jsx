import React, {useState, useEffect} from "react";
import "../style.css";
import {TaskBlock} from "./TaskBlock";

export const TasksComponent = () => {
    const customStyle = {
        height: "34.2rem",
        overflow: "auto"
    }

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, [])

    const handleAddTask = (event) => {
        if (event.key === "Enter") {
            const taskText = event.target.value;
            const newTask = { id: Date.now(), text: taskText };
            const updatedTasks = [...tasks, newTask]
            setTasks(updatedTasks);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks))
            event.target.value = ""
        }
    }

    const handleRemoveTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
        return (
        <div>
            <div className="titleContainer">
                <h2 className="titleContainerText">Tasks</h2>
            </div>
            <div>
                <div className="generalContainer" style={customStyle}>
                    <div className="addTaskContainer">
                        <input
                            type={"text"}
                            className="addTaskInput"
                            enterKeyHint={"enter"}
                            placeholder={"Write the task and press enter \u23CE"}
                            onKeyDown={handleAddTask}
                            />
                    </div>
                    {tasks.map((task) => (
                        <TaskBlock key={task.id}
                                   task={task.text}
                                   onRemove={() => handleRemoveTask(task.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};