import React, {useState, useEffect} from "react";
import "../style.css";
import {NewsBlock} from "./NewsBlock";
export const FeedContainer = () => {
    const [newsData, setNewsData] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const url =
            "https://gnews.io/api/v4/search?" +
            "q=programming&" +
            "sortby=relevance&" +
            `apikey=${apiKey}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setNewsData(data.articles);
            })
            .catch((error) => {
                console.error("Error fetching news data:", error);
            });
    }, [apiKey]);

    return (
        <div>
            <div className="feedTitleContainer">
                <h2 className="titleContainerText">Daily Feed</h2>
            </div>
            <div className="feedGeneralContainer">
                <div className="newsList">
                    {newsData && newsData.map((article, index) => (
                        <NewsBlock
                            key={index}
                            title={article.title}
                            link={article.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};