import React from "react";
import Pdf from "../../assets/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>CHAITANYA PALGHADMAL</h1>
      <h3>Passionate about Technology</h3>
      <h3>Passionate about Learning</h3>
      <a href={Pdf} target="_blank" rel="noreferrer">
        RESUME
      </a>
      <div className="links">
        <a
          href="https://www.github.com/chaitanyap14/"
          target="_blank"
          rel="noreferrer"
          className="ghlink"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/chaitanyap14/"
          target="_blank"
          rel="noreferrer"
          className="lilink"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
};

export default About;
