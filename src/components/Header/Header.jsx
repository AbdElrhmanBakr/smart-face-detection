import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header-container">
        <Link className="logo-link" to="/">
          <div className="logo-container">
            <Logo />
          </div>
        </Link>
        <nav className="navbar-container">
          <Link to="signup">
            <button className="btn-login">Sign Up</button>
          </Link>
          <Link to="login">
            <button className="btn-login">Log In</button>
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
