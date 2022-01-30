import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" className="cardimg" />
      <div className="desc">
        <h2>{props.name}</h2>
        <p>{props.desc}</p>
        <div className="cardlinks">
          <a href={props.gh} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={props.live} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faPlay} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
