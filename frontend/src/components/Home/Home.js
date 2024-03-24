import React from "react";
import "./Home.css";
import Header from '../Header';
import FreshPrompts from "../../FreshPrompts";

function Home() {

  return (
    <div id="main">
      <Header/>
      <FreshPrompts/>
    </div>
  );

}

export default Home;
