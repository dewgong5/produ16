import React, { useState } from "react";
import "./Explore.css";
import Header from "../Header";

import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { Link } from 'react-router-dom';

const historyTopics = ["fantasy", "sci-fi", "horror", "romance", "thriller", "mystery", "historical", "western", "adventure", "dystopian"];

const generatedTopics = [
    "urban fantasy", "epic fantasy", "space opera", "cyberpunk",
    "paranormal", "gothic horror", "psychological thriller", "crime mystery",
    "historical romance", "regency romance", "spaghetti western", "space western",
    "sword and sorcery", "high fantasy", "alien invasion", "time travel",
    "cozy mystery", "police procedural", "alternate history", "steampunk"
  ];


function TopicsList({ topics }) {
    // Function to chunk the topics array into groups of 10
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
        chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const chunkedTopics = chunkArray(topics, 10);

    return (
        <div className="list">
            {chunkedTopics.map((chunk, index) => (
                <div key={index} className="topicsGroup">
                {chunk.map((topic, index) => (
                <Link key={index} to={`/search-result?q=${topic}`} className="topicLink">
                    <p>{topic}</p>
                </Link>                
                ))}
                </div>
            ))}
        </div>
    );
}

function Explore() {

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        navigate(`/search-result?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div id="main">
        <Header/>
        <div className="search-bar">
            <input
                type="text"
                placeholder="SEARCH..."
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
            />
        </div>
        <div className="topicsNFilter">
            <div className="topics">
                <div className="topicsHeader">
                    <h2>TOPICS</h2>
                    <Link to={`/search-result?q=fantacy`} className="topicLink">
                        <p className="trending">Trending now: fantacy</p>
                    </Link>  
                </div>
                <div className="topicsContent">
                    <div className="history">
                        <h3>HISTORY</h3>
                        <TopicsList topics={historyTopics} />
                    </div>
                    <div className="generated">
                        <h3>FRESHLY·GENERATED FOR YOU</h3>
                        <TopicsList topics={generatedTopics} />
                    </div>
                </div>
            </div>

            <div className="filter">
                <h2>FILTER</h2>
                <div className="filter-section">
                    <h3>MEDIA TYPE</h3>
                    <div className="checkbox-group">
                        <label>
                            <input type="checkbox" name="media-type" value="text" />
                            Text
                        </label>
                        <label>
                            <input type="checkbox" name="media-type" value="image" />
                            Image
                        </label>
                        <label>
                            <input type="checkbox" name="media-type" value="video" />
                            Video
                        </label>
                    </div>
                </div>

                <div className="filter-section">
                    <div className="category">
                        <h3>LIKES</h3>
                        <div className="icons">
                            <span>↑</span>
                            <span>↓</span>
                        </div>
                    </div>
                    <div className="category">
                        <h3>Comments</h3>
                        <div className="icons">
                            <span>↑</span>
                            <span>↓</span>
                        </div>
                    </div>
                    <div className="category">
                        <h3>Date</h3>
                        <div className="icons">
                            <span>↑</span>
                            <span>↓</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
}

export default Explore;
