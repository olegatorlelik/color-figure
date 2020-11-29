import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Figure from "../Circle/Figure";

const Nav = () => {
  return (
    <div>
      <BrowserRouter>
        <Figure />
      </BrowserRouter>
    </div>
  );
};

export default Nav;
