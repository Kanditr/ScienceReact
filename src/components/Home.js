import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import Header from "./Header";
import Banner from "./Banner";
import DashBoard from "./Dashboard";
// import { Redirect } from "react-router-dom";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return (
      <>
        <div>
          <Header />
          <Banner />
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <Header />
        <Banner />
        <DashBoard />
      </div>
    </>
  );
};

export default Home;
