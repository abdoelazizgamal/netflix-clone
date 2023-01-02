import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/netflix_logo.png";
import Avatar from "../images/avatar.jpg";
import "../style/Nav.css";
const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const transitionNavBar = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents container">
        <img
          src={logo}
          alt=""
          className="nav__logo"
          onClick={() => navigate("/")}
        />
        <img
          src={Avatar}
          alt=""
          className="nav__avatar"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
};

export default NavBar;
