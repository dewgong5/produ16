import React, { useState } from "react";
import "./Profile.css";
import Header from "../Header";

import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import Card from "../Card";

import imageSrc from './avatar.png';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue pellentesque enim nec ullamcorper. Quisque volutpat pretium libero, non viverra lacus posuere non. In quis diam non tortor vulputate cursus in eget massa. Ut lorem tellus, congue eget libero nec, ornare ornare nunc. Vestibulum eleifend, dui ut viverra lobortis. '

function Profile() {

  const navigate = useNavigate();

  return (
    <div id="main">
        <Header/>
        <div className="scroll">
            <div className="userInfo">
                <div className="avatar">
                    <img src={imageSrc} alt="Avatar" className="avatarImage"/>
                    <button className="edit-button">EDIT</button>
                    <button className="remove-button">REMOVE</button>
                </div>
                <div className="info">
                    <h1 className="username">POOKIE_1</h1>
                    <div className="attributes">
                        <div className="prompts">
                            <h2>999</h2>
                            <h3>PROMPTS</h3>
                        </div>
                        <div className="likes">
                            <h2>999</h2>
                            <h3>LIKES</h3>
                        </div>
                        <div className="comments">
                            <h2>999</h2>
                            <h3>COMMENTS</h3>
                        </div>
                    </div>
                    <div className="about-me">
                        <h4>ABOUT ME:</h4>
                        <p>lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Phasellus congue
                            pellentesque enim nec ullamcorper.
                            Quisque volutpat pretium libero, non.</p>
                    </div>
                </div>
                <div className="favorite-topics">
                    <h3>FAVORITE TOPICS</h3>
                    <div className="topic-section">
                        <div className="topic-row">
                            <div className="resultBubble50">
                                fantacy
                            </div>
                            <div className="resultBubble50">
                                sci-fi
                            </div>
                            <div className="resultBubble50">
                                horror
                            </div>
                        </div>
                        <div className="topic-row">
                            <div className="resultBubble50">
                                romance
                            </div>
                            <div className="resultBubble50">
                                thriller
                            </div>
                        </div>
                        <div className="topic-row">
                            <div className="resultBubble50">
                                mystery
                            </div>
                            <div className="resultBubble50">
                                history
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-prompts">
                <h1>MY PROMPTS</h1>
                <div className="promptRow"></div>
                <Card title = "Fresh 1" description = {loremIpsum} user = "ADMIN" like = "25" comment = "20" shared = "30" saved = "11"/>
                <Card title = "Fresh 1" description = "So Fresh"/>
                <Card title = "Fresh 1" description = "So Fresh"/>
                <Card title = "Fresh 1" description = "So Fresh"/>
                <Card title = "Fresh 1" description = "So Fresh"/>
            </div>
        </div>
    </div>
  );
}

export default Profile;
