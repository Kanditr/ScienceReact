import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { AuthContext } from "./Auth";
import "./Header.css";
import firebaseConfig from "../config";

function HeaderNotLogIn() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { currentUser } = useContext(AuthContext);
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
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">{currentUser.email}</a>
            </li>
            <li>
              <Link
                to="/"
                className="menu-link"
                onClick={closeMobileMenu}
                onClick={() => firebaseConfig.auth().signOut()}
              >
                Sign out
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
