import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { userContext } from "../../context/UserContext";
import "./Intro.css";

const Intro = () => {
  const navigateTo = useNavigate();
  const { currentUser } = useContext(userContext);

  useEffect(() => {
    if (currentUser.id) {
      navigateTo("/home");
    }
  }, [currentUser]);

  return (
    <section className="intro-sec">
      {!currentUser.id && (
        <div className="sec-typewriter">
          <div className="intro-typewriter">
            <h1>Please, Log In to use the Application.</h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro;
