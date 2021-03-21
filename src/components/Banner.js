import React, { useContext, useState } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";

let bannerData = {
  title: "Science3 landing page",
  desc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti in est unde impedit recusandae! Corporis, eum cum excepturi eius ipsa maxime, quasi, molestias doloribus dolorem ipsum earum aperiam repellendus!",
};

function Banner() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="banner-bg">
      <div className="container">
        <div className="banner-con">
          <Container className="banner-text">
            <Typography variant="h4" gutterBottom>
              {bannerData.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {bannerData.desc}
            </Typography>
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
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Banner;
