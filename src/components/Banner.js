import React, { useContext, useState } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";

let bannerData = {
  title: "Science3 landing page",
  desc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti in est unde impedit recusandae! Corporis, eum cum excepturi eius ipsa maxime, quasi, molestias doloribus dolorem ipsum earum aperiam repellendus!",
};

function Banner() {
  const { currentUser } = useContext(AuthContext);

  const fromHome = true;

  return (
    <div className="banner-bg">
      <div className="container">
        <div className="banner-con">
          <div className="banner-text">
            <h1>{bannerData.title}</h1>
            <p>{bannerData.desc}</p>
            {currentUser ? (
              <Link to="/createproject" className="banner-btn">
                Create a project
              </Link>
            ) : (
              <Link
                to={{ pathname: "login", value: "home" }}
                className="banner-btn"
              >
                Create a project
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
