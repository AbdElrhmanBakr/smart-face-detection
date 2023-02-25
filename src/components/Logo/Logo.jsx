import Tilt from "react-parallax-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <Tilt className="tilt-logo">
      <img className="logo-img" src="./logo.png" alt="Logo" />
      <div className="logo-text-container">
        <div className="logo-text1">SMART FACE</div>
        <div className="logo-text2"> DETECTION</div>
      </div>
    </Tilt>
  );
};

export default Logo;
