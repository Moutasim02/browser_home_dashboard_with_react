import React from "react";
import "../style.css";

export const TaskBlock = ({ task }) => {
    return (
        <div className="taskBlock">
            <p className="taskText">{task}</p>
        </div>
    );
};