import React from "react";
import "./Block.css"

function Block({ img, title, text, btn }) {
  return (
    <div className="block">
  <img src={img} alt="" />
  <h3>{title}</h3>
  <p>{text}</p>
  <button>{btn}</button>
</div>

  );
}

export default Block;

