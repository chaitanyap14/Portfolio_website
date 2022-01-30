import React from "react";
import { Element } from "react-scroll";
import "./Main.css";

//components
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Main = () => {
  return (
    <div className="main">
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Main;
