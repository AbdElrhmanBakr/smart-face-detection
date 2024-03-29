import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { userContext } from "../../context/UserContext";
import "./LogIn.css";

const LogIn = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);

  const navigateTo = useNavigate();

  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: "",
  });

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setSignInFormData((prevFormState) => {
      return {
        ...prevFormState,
        [name]: value,
      };
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signInFormData),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          setCurrentUser(user);
          navigateTo("/home");
        }
      });
  };

  // Check If user is SignedIn already
  useEffect(() => {
    if (currentUser) {
      navigateTo("/home");
    }
  }, []);
  return (
    <section>
      {!currentUser && (
        <div className="login-container">
          <Link to="/">
            <span className="icon-close">
              <ion-icon name="close-outline"></ion-icon>
            </span>
          </Link>
          <h1 className="login-header">LOGIN</h1>
          <div className="login-form">
            <form onSubmit={onFormSubmit}>
              <div className="input-container">
                <span className="input-ico">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input
                  name="email"
                  type="email"
                  onChange={onFormInputChange}
                  required
                />
                <label>Email</label>
              </div>
              <div className="input-container">
                <span className="input-ico">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input
                  name="password"
                  type="password"
                  onChange={onFormInputChange}
                  required
                />
                <label>Password</label>
              </div>
              <button type="submit">Log In</button>
              <div className="register-container">
                <p className="register-text">
                  Do not have an account?!{" "}
                  <Link to="/signup" className="register-link">
                    Register Now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default LogIn;
