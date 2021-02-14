import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <a href="/">Science3</a>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">About</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">Contact</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">Blog</a>
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

export default Header;
