import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { userContext } from "../../context/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const { setCurrentUser } = useContext(userContext);

  const [signUpFormData, setSignUpFormData] = useState({
    user: "",
    email: "",
    password: "",
  });

  const navigateTo = useNavigate();

  const onLoginClick = () => navigateTo("/login");

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setSignUpFormData((prevFormState) => {
      return {
        ...prevFormState,
        [name]: value,
      };
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpFormData),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          setCurrentUser(user);
          navigateTo("/home");
        }
      });
  };

  return (
    <section>
      <div className="login-container">
        <Link to="/">
          <span className="icon-close">
            <ion-icon name="close-outline"></ion-icon>
          </span>
        </Link>
        <h1 className="login-header">REGISTRATION</h1>
        <div className="login-form">
          <form onSubmit={onFormSubmit}>
            <div className="input-container">
              <span className="input-ico">
                <ion-icon name="people"></ion-icon>
              </span>
              <input
                name="user"
                type="text"
                value={signUpFormData.user}
                onChange={onFormInputChange}
                required
              />
              <label>UserName</label>
            </div>
            <div className="input-container">
              <span className="input-ico">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                name="email"
                type="text"
                value={signUpFormData.email}
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
                value={signUpFormData.password}
                onChange={onFormInputChange}
                required
              />
              <label>Password</label>
            </div>
            <button type="submit">Sign Up</button>
            <div className="register-container">
              <p className="register-text">
                Have an account?!
                <a onClick={onLoginClick} className="register-link">
                  Log In Now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
