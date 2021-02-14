import React from "react";
import "./Banner.css";

let bannerData = {
  title: "Science3 landing page",
  desc:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti in est unde impedit recusandae! Corporis, eum cum excepturi eius ipsa maxime, quasi, molestias doloribus dolorem ipsum earum aperiam repellendus!",
};

function Banner() {
  return (
    <div className="banner-bg">
      <div className="container">
        <div className="banner-con">
          <div className="banner-text">
            <h1>{bannerData.title}</h1>
            <p>{bannerData.desc}</p>
            <a href="#" className="banner-btn">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
