import React from "react";
import "../style.css";

export const WelcomeText = () => {
    let userName = "Moutasim";
    return (
        <div className="welcomeTxt">
            Welcome, {userName}!
        </div>
    );
};