import React, { useEffect, useState } from "react";
import Activities from "./Activities/Activities";
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
    <div className="bg-transparent lg:flex ">
      <div className="lg:w-3/4">
        <Header></Header>
        <Activities cardDatas={cardDatas}></Activities>
      </div>
      <div className="lg:w-1/4 border bg-white">
        <VerticalBar cardDatas={cardDatas}></VerticalBar>
      </div>
    </div>
  );
};

export default Home;
