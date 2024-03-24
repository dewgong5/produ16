import React, { useState } from "react";
import "./SearchResult.css";
import Header from "../Header";

import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';


function SearchResult() {

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

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');

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
                    <h2>RESULTS FOR:</h2>
                    <div className="resultBubble">
                        {query}
                    </div>
                </div>
                <div className="content">
                    
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

export default SearchResult;
