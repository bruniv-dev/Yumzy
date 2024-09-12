import React, { useState } from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <ul className="navbar-menu">
        <Link
          onClick={() => setMenu("home")}
          className={`navbar-menu-item ${menu === "home" ? "active" : ""}`}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`navbar-menu-item ${menu === "menu" ? "active" : ""}`}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("app")}
          className={`navbar-menu-item ${menu === "app" ? "active" : ""}`}
        >
          app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={`navbar-menu-item ${
            menu === "contact-us" ? "active" : ""
          }`}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-bag-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Log In</button>
      </div>
    </div>
  );
};

export default Header;
