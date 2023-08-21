import React from "react";
import "../style.css";
import {NewsBlock} from "./NewsBlock";

// Show all feeds from the endpoint
export const FeedContainer = () => {

    return (
        <div>
            <div className="titleContainer">
                <h2 className="titleContainerText">Daily Feed</h2>
            </div>
            <div>
                <div className="feedContainer">
                    <div className="newsList">
                        <NewsBlock title="How modular can your monolith go? Part 2 - a first look at how subdomains collaborate"
                                   link="https://microservices.io//post/architecture/2023/08/20/how-modular-can-your-monolith-go-part-2.html" ></NewsBlock>

                        <NewsBlock title="Exploring Burp Suite’s Features: A Detailed Overview"
                                   link="https://infosecwriteups.com/exploring-burp-suites-features-a-detailed-overview-2bacf809c6f8" ></NewsBlock>

                        <NewsBlock title="Applying Design Principles In React"
                                   link="https://blog.openreplay.com/applying-design-principles-in-react/" ></NewsBlock>

                    </div>
                </div>
            </div>
        </div>
    );
};
