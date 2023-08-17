import React from "react";
import "../style.css";

export const TasksComponent = () => {
    const customStyle = {
        width: "34vw",
        margin: "0 0 0 0"
    }
    const customStyle2 = {
        width: "34vw",
        height: "62.5vh",
        margin: "0 0 0 0"
    }
    return (
        <div>
            <div className="titleContainer" style={customStyle}>
                <h2 className="titleContainerText">Tasks</h2>
            </div>
            <div>
                <div className="feedContainer" style={customStyle2}/>
            </div>
        </div>
    );
};
