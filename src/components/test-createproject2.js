import React, { useState, useContext } from "react";
// import { Redirect } from "react-router";
import firebaseConfig from "../config";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "./Auth";

function Testcreateproject2() {
  const sendMessage = (e) => {
    e.preventDefault();

    if ((login = false)) {
      console.log("currentUser");
    } else {
      // console.log("not currentUser");
      <Redirect to="/" />;
    }
  };

  const { currentUser } = useContext(AuthContext);

  const handleLogin = () => {
    if (currentUser != {}) {
      console.log("a");
    } else {
      setLogin(true);
    }
  };

  setLogin();

  const [login, setLogin] = useState(false);

  return (
    <div>
      <Header />

      <button
        type="submit"
        className="btn btn-primary"
        style={{ margin: `0px 0px 10px 0px` }}
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}

export default Testcreateproject2;
