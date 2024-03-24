import React, { useState } from "react";
import "./Post.css";
import Header from "../Header";

import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { Link } from 'react-router-dom';

import imageSrc from './drop-photo.png';

const historyTopics = ["fantasy", "sci-fi", "horror", "romance", "thriller", "mystery", "historical", "western", "adventure", "dystopian"];

const generatedTopics = [
    "urban fantasy", "epic fantasy", "space opera", "cyberpunk",
    "paranormal", "gothic horror", "psychological thriller", "crime mystery",
    "historical romance", "regency romance", "spaghetti western", "space western",
    "sword and sorcery", "high fantasy", "alien invasion", "time travel",
    "cozy mystery", "police procedural", "alternate history", "steampunk"
  ];


function Post() {

  return (
    <div id="main">
        <Header/>
        <div className="input-container">
            <div className="left">
                <div className="orange-circle2">
                    <p className="add2">+</p>
                </div>
            </div>
            <div className="right">
                <div className="input">
                    <h3>ADD A NEW PROMPT</h3>
                    <textarea placeholder="WRITE A CAPTION..." class="caption-textarea" data-gramm="false"></textarea>
                    <div className="title-input">
                        <h4>WRITE A SHORT TITLE : (MAX 30 CHARACTERS)</h4>
                        <input type="text" placeholder="TYPE HERE..." class="title" />
                    </div>
                </div>
                <div className="extra">
                    <div className="drop-photo">
                        <label for="file-input" class="file-input-label">
                            <img src={imageSrc} alt="Upload File" className="drop-photo-img"/>
                            <input id="file-input" type="file" class="file-input" />
                        </label>
                    </div>
                    <div className="topicNsubmit">
                        <div className="topic">
                            <h4>SELECT A TOPIC :</h4>
                            <input type="text" placeholder="SEARCH..." class="search-topic" />
                        </div>
                        <div className="submit">
                            <div className="brown-bubble">
                                <h2 className="POP">POP</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Post;
