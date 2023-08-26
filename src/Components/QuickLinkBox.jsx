import React from "react";
import "../style.css";

export const QuickLinkBox = (props) => {
    return (
        <div className="quickLinkBox">
            <a href={props.url} className="quickLink" title={props.name}>
                <img
                    src={props.imgSrc}
                    alt="Image Couldn't load"
                    className="quickLinkImage"
                />
            </a>
        </div>
    );
};