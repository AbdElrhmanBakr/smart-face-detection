import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigateTo = useNavigate();

  const onLoginClick = () => navigateTo("/login");
  const submitHandle = () => {};
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
          <form onSubmit={submitHandle}>
            <div className="input-container">
              <span className="input-ico">
                <ion-icon name="people"></ion-icon>
              </span>
              <input name="user" type="text" required />
              <label>UserName</label>
            </div>
            <div className="input-container">
              <span className="input-ico">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input name="email" type="text" required />
              <label>Email</label>
            </div>
            <div className="input-container">
              <span className="input-ico">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input name="password" type="password" required />
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
