import React from "react";
import "../style.css";

export const NewsBlock = (params) => {
    const domain = extractDomain(params.link);

    return (
        <div className="newsBlock">
                <a title={params.title} href={params.link}>{params.title + " - " + domain}</a>
        </div>
    );
};

function extractDomain(url) {
    let domain = "";
    const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/im;
    const match = url.match(regex);
    if (match && match.length > 1) {
        domain = match[1];
    }
    return domain;
}