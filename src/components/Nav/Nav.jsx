import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="navlinks">
        <Link to="about" smooth={true}>
          <li className="aboutlink">About</li>
        </Link>
        <Link to="projects" smooth={true}>
          <li className="projectslink">Projects</li>
        </Link>
        <Link to="contact" smooth={true}>
          <li className="contactlink">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
