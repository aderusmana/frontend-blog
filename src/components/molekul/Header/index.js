import React, { useState } from "react";
import "./header.scss";
import { logo } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo-app" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
        <p>MERN BLOG</p>
      </div>
      <div className="menu-dropdown" onClick={toggleDropdown}>
        <h3>Nama User {isOpen ?  <FaCaretUp /> : <FaCaretDown />}</h3>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <h4 className="dropdown-item" onClick={() => navigate("/settings")}>
            Settings
          </h4>
          <h4 className="dropdown-item" onClick={() => navigate("/logout")}>
            Logout
          </h4>
        </div>
      )}
    </div>
  );
};


export default Header;
