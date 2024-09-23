import React, { act, useState } from "react";

import "../styles/Navbar.css";
function Navbar({ closeNavbar }) {
  const [active, setActive] = useState(closeNavbar);
  // closeNavbar && setActive(closeNavbar);
  return (
    <nav className={active ? "responsive_navbar" : "navbar"}>
      <div className="navbar_title"><a>Affirm</a></div>
      <div>
        <ul className={active ? "responsive_navbar_links" : "navbar_links"}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://github.com/annthurium/affirmations" target="blank">Github</a>
          </li>
        </ul>
      </div>
      <div className="hamburger_icon" onClick={() => setActive(!active)}>
        {active ? "✕" : "☰"}
      </div>
    </nav>
  );
}

export default Navbar;
