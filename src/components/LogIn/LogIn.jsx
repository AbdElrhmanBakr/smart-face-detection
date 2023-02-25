import "./LogIn.css";

const LogIn = () => {
  const submitHandle = () => {};
  return (
    <section>
      <div className="login-container">
        <span className="icon-close">
          <ion-icon name="close-outline"></ion-icon>
        </span>
        <h1 className="login-header">LOGIN</h1>
        <div className="login-form">
          <form onSubmit={submitHandle}>
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
            <button type="submit">Log In</button>
            <div className="register-container">
              <p className="register-text">
                Do not have an account?!{" "}
                <a href="" className="register-link">
                  Register Now
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
