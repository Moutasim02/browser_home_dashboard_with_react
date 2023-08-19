import React from "react";
import "../style.css";
import {NewsBlock} from "./NewsBlock";

export const FeedContainer = () => {
    return (
        <div>
            <div className="titleContainer">
                <h2 className="titleContainerText">Daily Feed</h2>
            </div>
            <div>
                <div className="feedContainer">
                    <div className="newsList">
                        <NewsBlock></NewsBlock>
                        <NewsBlock></NewsBlock>
                        <NewsBlock></NewsBlock>
                        <NewsBlock></NewsBlock>
                        <NewsBlock></NewsBlock>
                        <NewsBlock></NewsBlock>
                        <NewsBlock></NewsBlock>
                        <NewsBlock></NewsBlock>
                        <NewsBlock></NewsBlock>
                        <NewsBlock></NewsBlock>
                    </div>
                </div>
            </div>
        </div>
    );
};
