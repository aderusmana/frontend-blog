import React from "react";
import "./header.scss";
import { logo } from "../../../assets";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <div className="logo-app" onClick={() => navigate("/") }>
        <img src={logo} alt="logo" />
        <p>MERN BLOG</p>
      </div>
      <h1 className="menu-item" onClick={() => navigate("/login")}>LOG OUT</h1>
    </div>
  );
};

export default Header;
