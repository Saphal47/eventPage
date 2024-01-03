import React from "react";
import logo from "../../assets/wordmark-light.png";
import { Link } from "react-router-dom";

export const Logo =() => {
  return (
    <Link to="/" className="flex items-center gap-4 z-20">
      <img src={logo} alt="Events logo" className="h-[60%] w-12" />
    </Link>
  );
};
