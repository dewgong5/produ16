import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from '../Header';
import FreshPrompts from "../../FreshPrompts";
import Hotprompts from "../Hotprompts";

function Home() {
  var [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Handle scroll1")
      if (window.scrollY > 10) {
        setHide(true);
        console.log("Handle scroll2")

      } else {
        setHide(false);
        console.log("Handle scroll3")

      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="main">
      <Header />
      {!hide ? <Hotprompts /> : null}
      <FreshPrompts />
    </div>
  );
}

export default Home;
