import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import './../button.scss'

const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link className="textback" to="/" title="Back" onClick={() => navigate(-1)}>
        <FaArrowLeft className="iconback" /> Back
      </Link>
    </div>
  );
};

export default ButtonBack;
