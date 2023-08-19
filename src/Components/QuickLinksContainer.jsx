import React from "react";
import "../style.css";
import image1 from "../images/img.png";
import image2 from "../logo.svg";

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
                <div className="feedContainer" style={customStyle2}>
                    <div className="quickLinksList">
                        <div className="quickLinkBox">
                            <img src={image2} alt="Quick Link 1" className="quickLinkImage"/>
                        </div>
                        <div className="quickLinkBox">
                            <img src={image2} alt="Quick Link 2" className="quickLinkImage"/>
                        </div>
                        <div className="quickLinkBox">
                            <img src={image2} alt="Quick Link 3" className="quickLinkImage"/>
                        </div>
                        <div className="quickLinkBox">
                            <img src={image2} alt="Quick Link 4" className="quickLinkImage"/>
                        </div>
                        <div className="quickLinkBox">
                            <img src={image2} alt="Quick Link 5" className="quickLinkImage"/>
                        </div>
                        <div className="quickLinkBox">
                            <img src={image1} alt="Add Quick Link" className="addQuickLinkBtn" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
