import React, { useEffect, useRef, useState } from "react";

const ActivityCard = ({ cardData, handleAddToList }) => {
  const { name, img, age, time, description } = cardData;

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  }

  return (
    <div>
      <div className=" m-5 p-3 bg-white rounded-3xl shadow-2xl ">
        <img className=" rounded-3xl px-3 my-4 mx-auto" src={img} alt="" />
        <h2 className="font-bold px-3">{name}</h2>
        <p className="px-3 text-slate-600">{description}</p>
        <h2 className="font-semibold px-3">
          For Age: <span className="font-bold">{age}</span>
        </h2>
        <h2 className="font-semibold px-3">
          Time Required: <span className="font-bold">{time}</span>
        </h2>
        <button

          style={{
            backgroundColor: isActive ? "#27ae60" : "",
            color: isActive ? "white" : "",
          }}
          onClick={() => { handleClick(); handleAddToList(cardData); }}
          className="bg-indigo-500 rounded-lg text-white w-full py-2 px-3 mt-4 mb-3 "
        >
          {isActive ? "Added" : "Add to list"}
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;