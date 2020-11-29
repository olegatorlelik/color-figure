import React from "react";
import { Link } from "react-router-dom";
import Figure from "../Circle/Figure";
import { useState } from "react";

const Nav = () => {
  const figures = ["circle", "square"];
  const colors = ["red", "black", "yellow", "green", "gray"];

  const [figureState, setFigureState] = useState(figures[0]);
  const [colorState, setColorState] = useState(colors[0]);
  return (
    <div>
      {figures.map((elem, index) => {
        return (
          <Link
            to={`/figure/${elem}`}
            key={index}
            onClick={() => {
              setFigureState(elem);
            }}
          >
            {elem}
          </Link>
        );
      })}
      <Figure color={colorState} figure={figureState} />
      {colors.map((elem, index) => {
        return (
          <Link
            to={`/figure/${figureState}/${elem}`}
            key={index}
            onClick={() => {
              setColorState(elem);
            }}
          >
            {elem}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
