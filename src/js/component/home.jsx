import React from "react";
import Title from "./title";
import List from "./list";

const Home = () => {
  return (
    <div className=" mt-5 text-center mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
      <Title />
      <List />
    </div>
  );
};

export default Home;
