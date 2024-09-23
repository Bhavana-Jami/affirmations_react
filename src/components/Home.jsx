import React, { useState } from "react";
import "../styles/Home.css";
import { useFetch } from "./useFetch";
import Navbar from "./Navbar";
import { affirmations } from "../data/affirmation";
function Home() {
  // const { affirmationsList, fetchAffirmations } = useFetch(affirmations);
  const [randomAffirmation, setRandomAffirmation] = useState("");
  const [closeNavbar, setCloseNavbar] = useState(false);
  const handleClick = () => {
    const randomAffirmation =
      affirmations[Math.floor(Math.random() * affirmations.length)];
    setRandomAffirmation(randomAffirmation);
    setCloseNavbar(true)
  };
  return (
    <div className="home_container">
      <div className="home_overlay">
        <Navbar closeNavbar={closeNavbar}/>

        <p>
          {randomAffirmation ? randomAffirmation : "Hello there, affirm now!"}
        </p>
        <button onClick={handleClick}>Click here</button>
      </div>
    </div>
  );
}

export default Home;
