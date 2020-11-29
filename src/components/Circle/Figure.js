import React, { useState } from "react";
import "./StyleFigure.css";
import { Link } from "react-router-dom";

const Figure = (props) => {
  const figures = ["circle", "square"];
  const colors = ["red", "black", "yellow", "green", "gray"];

  const [figureState, setState] = useState("");
  const [colorState, setColorState] = useState("");
  console.log(figureState);

  return (
    <div>
      {figures.map((elem, index) => {
        return (
          <Link to={`${elem}`} key={index} onClick={() => setState(elem)}>
            {elem}{" "}
          </Link>
        );
      })}
      <div className={figureState + " " + colorState}></div>
      {colors.map((elem, index) => {
        return (
          <Link to={`${elem}`} key={index} onClick={() => setColorState(elem)}>
            {elem}{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default Figure;
