import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "../style/LoginScreen.css";
import logo from "../images/netflix_logo.png";
const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <header className="navbar container">
          <img src={logo} alt="" className="loginScreen__logo" />
          <button
            className="loginScreen__button"
            onClick={() => setSignIn(!signIn)}
          >
            {signIn ? "Signup" : "Login"}
          </button>
        </header>
        {/* <div className="loginScreen_gradient" /> */}
        <div className="loginScreen__body">
          {signIn ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
