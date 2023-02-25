import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="navbar-ico">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="navbar-container">
        {/* <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul> */}
        <button className="btn-login">Log In</button>
      </nav>
    </header>
  );
};

export default Header;
