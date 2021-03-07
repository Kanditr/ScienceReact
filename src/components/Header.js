import React, { useContext } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";
// import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderNotLoggedIn from "./HeaderNotLogIn";

function Header() {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <HeaderLoggedIn />;
  }
  return <HeaderNotLoggedIn />;
}

export default Header;
