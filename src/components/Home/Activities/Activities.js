import React from "react";
import ActivityCard from "./ActivityCard";

const Activities = ({ cardDatas }) => {
  console.log("card datas", cardDatas);
  return (
    <div>
      <h3 className="ml-5 my-5 font-bold text-xl">Select Today's Exercise</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        {cardDatas.map((cardData) => (
          <ActivityCard key={cardData._id} cardData={cardData}></ActivityCard>
        ))}
      </div>
    </div>
  );
};

export default Activities;
