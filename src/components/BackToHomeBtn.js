import React from "react";
import { NavLink } from "react-router-dom";

const BackToHomeBtn = () => {
  return (
    <NavLink to="/" className="close-search">
      Close
    </NavLink>
  );
};

export default BackToHomeBtn;
