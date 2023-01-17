import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
            <li>
              <NavLink to="register">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
