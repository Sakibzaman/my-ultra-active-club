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
    <div className="bg-transparent flex ">
      <div className="w-3/4">
        <Header></Header>
        <Activities cardDatas={cardDatas}></Activities>
      </div>
      <div className="w-1/4 border border-red-600 bg-white">
        <VerticalBar></VerticalBar>
      </div>
    </div>
  );
};

export default Home;
