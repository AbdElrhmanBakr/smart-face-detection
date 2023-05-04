import { useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";

import { userContext } from "../../context/UserContext";
import "./Header.css";

const Header = () => {
  const navigateTo = useNavigate();
  const { currentUser, setCurrentUser } = useContext(userContext);

  const onSignOutClick = () => {
    navigateTo("/");
    setCurrentUser({});
  };

  return (
    <>
      <header className="header-container">
        {currentUser ? (
          <Link className="logo-link" to="/home">
            <div className="logo-container">
              <Logo />
            </div>
          </Link>
        ) : (
          <Link className="logo-link" to="/">
            <div className="logo-container">
              <Logo />
            </div>
          </Link>
        )}

        {currentUser ? (
          <nav className="navbar-container">
            <button className="btn-login" onClick={onSignOutClick}>
              Sign Out
            </button>
          </nav>
        ) : (
          <nav className="navbar-container">
            <Link to="signup">
              <button className="btn-login">Sign Up</button>
            </Link>
            <Link to="login">
              <button className="btn-login">Log In</button>
            </Link>
          </nav>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
