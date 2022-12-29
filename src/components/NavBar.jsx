import { useEffect, useState } from "react";
import "../style/Nav.css";
const NavBar = () => {
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
          src={process.env.PUBLIC_URL + "logo.png"}
          alt=""
          className="nav__logo"
        />
        <img
          src={process.env.PUBLIC_URL + "avatar.jpg"}
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
