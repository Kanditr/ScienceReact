

// this test is work !!!!



import React, { Component, useContext } from "react";
// import { Redirect } from "react-router";
import firebaseConfig from "../config";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import LogIn from "./Login";

var db = firebaseConfig.firestore();

class Testcreateproject3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      alert: false,
      alertData: {},
      redirect: false,
    };
  }

  setRedirect = () => {
    let user = firebaseConfig.auth().currentUser;
    if (!user) {
      this.setState({
        redirect: true,
      });
    } else {
      console.log("Yay");
    }
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        <Header />
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Redirect</button>
      </div>
    );
  }
}

export default Testcreateproject3;
