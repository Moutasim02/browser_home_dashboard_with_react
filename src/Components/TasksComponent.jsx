import React from "react";
import "../style.css";
import { TaskBlock } from "./TaskBlock";

export const TasksComponent = () => {
    const customStyle = {
        height: "31rem", // Adjust the value based on your desired height
        overflow: "auto"
    }

    return (
        <div>
            <div className="titleContainer" >
                <h2 className="titleContainerText">Tasks</h2>
            </div>
            <div>
                <div className="generalContainer" style={customStyle}>
                    <div className="addTaskContainer">
                        <input type={"text"} className="addTaskInput"
                               enterKeyHint={"enter"} placeholder={"Write the task and press enter \u23CE"}/>
                    </div>
                    <TaskBlock task="Task 1" />
                    <TaskBlock task="Task 2" />
                    <TaskBlock task="Task 3" />
                    <TaskBlock task="Task 4" />
                    <TaskBlock task="Task 5" />
                    <TaskBlock task="Task 5" />
                    <TaskBlock task="Task 5" />
                </div>
            </div>
        </div>
    );
};