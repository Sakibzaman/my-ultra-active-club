import React from "react";

const ActivityCard = (props) => {
  console.log(props.cardData);
  const { name, img, age, time, description } = props.cardData;
  return (
    <div>
      <div className="m-5 p-3 bg-white rounded-3xl shadow-2xl">
        <img
          className="w-full max-h-44 rounded-3xl px-3 my-4"
          src={img}
          alt=""
        />
        <h2 className="font-bold px-3">{name}</h2>
        <p className="px-3 text-slate-600">{description}</p>
        <h2 className="font-semibold px-3">
          For Age: <span className="font-bold">{age}</span>
        </h2>
        <h2 className="font-semibold px-3">
          Time Required: <span className="font-bold">{time}</span>
        </h2>
        <button className="bg-indigo-500 rounded-lg text-white w-full py-2 px-36 mt-4 mb-3 ">
          Add to list
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
