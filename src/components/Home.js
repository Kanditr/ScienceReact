import React, { useContext } from "react";
import { AuthContext } from "./Auth";
import Header from "./Header";
import Banner from "./Banner";

const Home = () => {
  const { currentUSer } = useContext(AuthContext);

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
