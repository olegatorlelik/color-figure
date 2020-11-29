import React from "react";
import { useParams } from "react-router-dom";
import "./StyleFigure.css";

const Figure = (props) => {
  console.log(useParams());
  return (
    <div>
      <div className={props.figure + " " + props.color}>{props.figure}</div>
    </div>
  );
};

export default Figure;
