import React from "react";
import "../style.css";

export const TaskBlock = (props) => {
    return (
        <div className="taskBlock">
            <p className="taskText">{props.task}</p>
        </div>
    );
};