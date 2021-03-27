import React from "react";
import "../assets/scss/header.scss";

import logo from "../assets/logo.png";

const Header = () => {
  return (
        <div className="header">
      <img src={logo} />
      <h1>Floppa Stats</h1>
        </div>
  );
};

export default Header;
