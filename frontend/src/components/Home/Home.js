import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from '../Header';
import FreshPrompts from "../FreshPrompts";
import Hotprompts from "../Hotprompts";

function Home() {
  return (
    <div id="main">
      <Header />
      <FreshPrompts />
    </div>
  );
}

export default Home;
