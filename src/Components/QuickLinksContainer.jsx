import React from "react";
import "../style.css";

export const QuickLinksContainer = () => {
    const customStyle = {
        width: "34vw",
        margin: "0 0 0 0"
    }
    const customStyle2 = {
        width: "34vw",
        height: "10vh",
        margin: "0 0 0 0"
    }
    return (
        <div>
            <div className="titleContainer" style={customStyle}>
                <h2 className="titleContainerText">Quick Links</h2>
            </div>
            <div>
                <div className="feedContainer" style={customStyle2}/>
            </div>
        </div>
    );
};
