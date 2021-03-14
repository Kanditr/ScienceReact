import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

function HeaderNotLogIn() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <Link to="/">Science3</Link>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">About</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">Contact</a>
            </li>
            <li>
              <Link to="/login" className="menu-link" onClick={closeMobileMenu}>
                Log in
              </Link>
            </li>
            <li>
              <Link to="signup" className="menu-link" onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNotLogIn;
