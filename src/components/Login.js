import React, { useContext, useState, useEffect } from "react";
import { Redirect, Link, useLocation } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import Header from "./Header";
import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const LogIn = () => {
  const [check, setCheck] = useState();

  let Location = useLocation();
  let homeCheck = Location.value;

  useEffect(() => {
    setCheck(2);
    console.log(currentUser);
    console.log(homeCheck);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);

  // can be improve using ternary code? SCN-61
  if (currentUser && homeCheck) {
    return <Redirect to="/createproject" />;
  }

  if (currentUser && !homeCheck) {
    return <Redirect to="/" />;
  }
  // can be improve using ternary code? SCN-61

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="signup" className="btn btn-success ms-2">
            Signup
          </Link>
        </form>
        <div className="container mt-5">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </div>
    </>
  );
};

export default LogIn;
