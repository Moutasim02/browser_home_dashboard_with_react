import React from "react";

function DateTimeComponent() {
    const date = new Date();
    const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
    };

    const formattedDate = date.toLocaleString("en-US", options);
    return <div className="welcomeTxt">{formattedDate}</div>;
}

export default DateTimeComponent;