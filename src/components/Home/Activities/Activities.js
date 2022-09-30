import React from "react";
import ActivityCard from "./ActivityCard";

const Activities = ({ cardDataCollection, handleAddToList }) => {
  // console.log("card DataCollection", cardDataCollection);
  return (
    <div>
      <h3 className="ml-5 my-5 font-bold text-xl text-center lg:text-left">Select Today's Exercise</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        {cardDataCollection.map((cardData) => (
          <ActivityCard key={cardData.id} handleAddToList={handleAddToList} cardData={cardData}></ActivityCard>
        ))}
      </div>
    </div>
  );
};

export default Activities;
