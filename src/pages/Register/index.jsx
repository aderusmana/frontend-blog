import React from "react";
import './register.scss'
import { logo } from "../../assets";
import { ButtonSuccess, Input } from "../../components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="main-page">
      <div className="content">
        <img src={logo} alt="" />
        <h1>Register</h1>
        <Input label="Name" placeholder="Input Name" type="text"/>
        <Input label={"Email"} placeholder="Input Email" type="email"/>
        <Input label={"Password"} placeholder="Input Password" type="password"/>
        <ButtonSuccess title={"Register"}  />
        <p>Already have an account? <Link to="/login">Login</Link></p>

      </div>
    </div>
  );
};

export default Register;
