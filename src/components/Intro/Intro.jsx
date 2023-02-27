import { Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro-sec">
      <div className="sec-typewriter">
        <div className="intro-typewriter">
          <h1>Please, Log In to use the Application.</h1>
        </div>
      </div>
      <Link to="home">
        <button className="btn-login">Test The App</button>
      </Link>
    </section>
  );
};

export default Intro;
