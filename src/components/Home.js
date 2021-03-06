import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import Header from "./Header";
import Banner from "./Banner";
import { Redirect } from "react-router-dom";
import Project from "./Project";

const Home = () => {
  const { currentUSer } = useContext(AuthContext);

  // if (!currentUSer) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <>
      <div>
        <Header />
        <Banner />
        <Project />
      </div>
    </>
  );
};

export default Home;
