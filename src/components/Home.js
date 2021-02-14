import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import Header from "./Header";
import Banner from "./Banner";

const Home = () => {
  const { currentUSer } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Banner />
      <div className="container mt-5">
        {currentUSer ? (
          <p>
            You are logged in - <Link to="/dashboard">View Dashboard</Link>
          </p>
        ) : (
          <p>
            <Link to="/login" className="btn btn-primary">
              Log in
            </Link>{" "}
            or{" "}
            <Link to="signup" className="btn btn-success">
              Sign up
            </Link>
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
