import React from "react";
import { facebookic, githubic, instagramic, logo, telegramic } from "../../../assets";
import './footer.scss'

const Icon  = ({img})=> {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icons" />
    </div>
  )
}
const Footer = () => {
  return (
    <div >
      <div className="footer">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="social-wrapper">
          <Icon img={facebookic} />
          <Icon img={instagramic} />
          <Icon img={githubic} />
          <Icon img={telegramic} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy;2023-2024 Dbuchin Apps<br/> All Right Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
