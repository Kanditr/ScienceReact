import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import Header from "./Header";
import Banner from "./Banner";
import { Redirect } from "react-router-dom";

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
      </div>
    </>
  );
};

export default Home;
