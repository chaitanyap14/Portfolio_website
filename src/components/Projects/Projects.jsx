import React from "react";
import "./Projects.css";

//components
import Card from "./Card/Card";

//images
import dadjokes from "../../assets/dadjokes.png";
import rockpaperscissors from "../../assets/rockpaperscissors.png";
import weatherapp from "../../assets/weatherapp.png";
import pokedex from "../../assets/pokedex.png";
import pharma from "../../assets/pharma.png";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectlist">
        <Card
          name="Dad Joke Generator"
          img={dadjokes}
          gh="https://www.github.com/chaitanyap14/Basic_Web_Dev/tree/main/Dad_Jokes"
          live="https://chaitanyap14.github.io/Basic_Web_Dev/Dad_Jokes"
          desc="A simple web app that generates a random dad jokes which is fetched from a dad joke API. This app was written using HTML, CSS and JavaScript."
        />
        <Card
          name="Rock Paper Scissors"
          img={rockpaperscissors}
          gh="https://www.github.com/chaitanyap14/Basic_Web_Dev/tree/main/Rock_Paper_Scissors"
          live="https://chaitanyap14.github.io/Basic_Web_Dev/Rock_Paper_Scissors"
          desc="A simple rock paper scissors game built using HTML, CSS and JavaScript. The computer randomly selects rock, paper or scissors. 1 point is awarded per round win."
        />
        <Card
          name="Weather App"
          img={weatherapp}
          gh="https://www.github.io/chaitanyap14/Basic_Web_Dev/tree/main/Weather_App"
          live="https://chaitanyap14.github.io/Basic_Web_Dev/Weather_App"
          desc="A simple weather application which fetches weather information according to the search term from the OpenWeatherMap API. Axios is used to fetch from the API. This app is built using HTML, CSS and JavaScript"
        />
        <Card
          name="Pokedex"
          img={pokedex}
          gh="https://www.github.com/chaitanyap14/React_Projects/tree/main/pokedex"
          live="https://pokedex-mu-indol.vercel.app/"
          desc="A pokedex web application built using React and CSS. Information about Pokemon is fetched from PokeAPI using axios. Application is deployed on Vercel."
        />
        <Card
          name="Pharmacy Management Web App"
          img={pharma}
          gh="https://www.github.com/chaitanyap14/Pharmacy_Mgmt"
          live="https://drive.google.com/file/d/1kNDbUkDnovwnS8ZFp-RgXJvtl2pJg9-h/view?usp=sharing"
          desc="A simple Pharmacy Management Application which enables the pharmacist to make sales. Customer information can be added. Login and Registration for the pharmacist has been implemented. Authentication is performed using JWT and bcrypt. Passwords are hashed into the database using bcrypt. Pharmacist information can be updated or deleted. This app is built using React, CSS, Node.js, ExpressJS and MySQL. The app is a mini project that I built for my Database Management Systems class in College."
        />
      </div>
    </div>
  );
};

export default Projects;
