import React from "react";
import Activities from "./Activities/Activities";
import ActivityCard from "./Activities/ActivityCard";
import Header from "./Header/Header";
import VerticalBar from "./VerticalBar/VerticalBar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Activities></Activities>
      <ActivityCard></ActivityCard>
      <VerticalBar></VerticalBar>
    </div>
  );
};

export default Home;
