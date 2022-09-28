import React from "react";
import ActivityCard from "./ActivityCard";

const Activities = ({ cardDatas }) => {
  console.log("card datas", cardDatas);
  return (
    <div>
      <h3>Select Today's Exercise</h3>
      <div>
        {cardDatas.map((cardData) => (
          <ActivityCard key={cardData._id} cardData={cardData}></ActivityCard>
        ))}
      </div>
    </div>
  );
};

export default Activities;
