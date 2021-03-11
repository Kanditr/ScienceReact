import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import Header from "./Header";
import Banner from "./Banner";
import DashBoard from "./Dashboard";
// import { Redirect } from "react-router-dom";
import SectionProject from "./sectionProject";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return (
      <>
        <div>
          <Header />
          <Banner />
          <SectionProject />
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
        <SectionProject />
      </div>
    </>
  );
};

export default Home;
