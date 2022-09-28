import React, { useEffect, useState } from "react";
import Activities from "./Activities/Activities";
import ActivityCard from "./Activities/ActivityCard";
import Header from "./Header/Header";
import VerticalBar from "./VerticalBar/VerticalBar";

const Home = () => {
  const [cardDatas, setCardDatas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCardDatas(data));
  }, []);

  return (
    <div>
      <Header></Header>
      {cardDatas.map((cardData) => (
        <ActivityCard key={cardData.id} cardData={cardData}></ActivityCard>
      ))}
      <VerticalBar></VerticalBar>
    </div>
  );
};

export default Home;
