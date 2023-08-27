import React, { useState, useEffect } from "react";

function DateTimeComponent() {
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        const updateDate = () => {
            const date = new Date();
            const options = {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true
            };
            const newFormattedDate = date.toLocaleString("en-US", options);
            setFormattedDate(newFormattedDate);
        };

        updateDate();

        const interval = setInterval(updateDate, 60000);

        return () => clearInterval(interval);
    }, []);

    return <div className="welcomeTxt">{formattedDate}</div>;
}

export default DateTimeComponent;