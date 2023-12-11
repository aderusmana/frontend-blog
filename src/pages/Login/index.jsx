import React from 'react'
import { loginbg, logo } from '../../assets'
import { ButtonSuccess, Input } from '../../components'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={loginbg} alt="login-bg" className="bg-image"/>
      </div>
      <div className="right">
        <img src={logo} alt="" />
        <h1>Login</h1>
        <Input label={"Email"} placeholder="Input Email" type="email"/>
        <Input label={"Password"} placeholder="Input Password" type="password"/>
        <ButtonSuccess title={"Login"}  />
        <p>Not yet have an account? <Link to="/register">Register</Link></p>

      </div>
    </div>
  )
}

export default Login