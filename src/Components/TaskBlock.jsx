import React from "react";
import "../style.css";

export const TaskBlock = (props) => {
    return (
        <div className="taskBlock" onDoubleClick={props.onRemove}>
            <p className="taskText">{props.task}</p>
        </div>
    );
};