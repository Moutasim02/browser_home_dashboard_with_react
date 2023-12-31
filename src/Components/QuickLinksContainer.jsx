import React from "react";
import "../style.css";
import {QuickLinkBox} from "./QuickLinkBox";
import leetcode from "../images/leetcode.png";
import gmail from "../images/gmail.png";
import outlook from "../images/outlook.png";
import whatsapp from "../images/whatsapp.png";
import bb from "../images/bb.png";
import udemy from "../images/udemy.png";
import github from "../images/github.png";
import chatgpt from "../images/chatgpt-logo-white-on-transparent-background-png.png"
import bard from "../images/Google_Bard_logo.svg.png"
export const QuickLinksContainer = () => {
    const customStyle = {
        height: "5rem"
    }

    return (
        <div>
            <div className="titleContainer">
                <h2 className="titleContainerText">Quick Links</h2>
            </div>
            <div>
                <div className="generalContainer" style={customStyle}>
                    <div className="quickLinksList">
                        <QuickLinkBox
                            imgSrc={gmail}
                            url={"https://mail.google.com/"}
                            name={"Gmail"}
                        />
                        <QuickLinkBox
                            imgSrc={outlook}
                            url={"https://outlook.office365.com/mail/"}
                            name={"Outlook"}
                        />
                        <QuickLinkBox
                            imgSrc={whatsapp}
                            url={"https://web.whatsapp.com/"}
                            name={"Whatsapp"}
                        />
                        <QuickLinkBox
                            imgSrc={bb}
                            url={"https://blackboard.adu.ac.ae/"}
                            name={"Blackboard"}
                        />
                        <QuickLinkBox
                            imgSrc={github}
                            url={"https://github.com"}
                            name={"GitHub"}
                        />
                        <QuickLinkBox
                            imgSrc={leetcode}
                            url={"https://leetcode.com/"}
                            name={"LeetCode"}
                        />
                        <QuickLinkBox
                            imgSrc={udemy}
                            url={"https://www.udemy.com/"}
                            name={"Udemy"}
                        />
                        <QuickLinkBox
                            imgSrc={chatgpt}
                            url={"https://chat.openai.com/"}
                            name={"ChatGPT"}
                        />
                        <QuickLinkBox
                            imgSrc={bard}
                            url={"https://bard.google.com/"}
                            name={"Bard Ai"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};