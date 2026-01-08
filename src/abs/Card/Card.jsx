import React from "react";
import "./Card.css";

function Card({ rasim, name, ish, soxa }) {
  return (
    <div className="card">
      <img src={rasim} alt={name} />
      <h2>{name}</h2>
      <p className="ish">{ish}</p>
      <p className="soxa">{soxa}</p>
    </div>
  )
}

export default Card;
