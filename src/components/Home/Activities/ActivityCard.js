import React from "react";

const ActivityCard = (props) => {
  console.log(props.cardData);
  const { name, img, age, time, description } = props.cardData;
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <h2>For Age: {age}</h2>
      <h2>Time Required: {time}</h2>
    </div>
  );
};

export default ActivityCard;
