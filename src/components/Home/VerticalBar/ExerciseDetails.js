import React from "react";

const ExerciseDetails = ({ breakTime }) => {
  // const { time } = cardDatas.time;

  return (
    <div>
      <h1 className="text-3xl font-semibold mt-4 ">Exercise Details</h1>
      <div className="flex flex-col">
        <div className="mt-5 p-4 text-xl rounded-2xl bg-gray-100 flex justify-between">
          <h1 className="pl-3 font-semibold ">Exercise Time </h1>
          <h1 className="pr-4  "> seconds</h1>
        </div>
        <div className="flex justify-between mt-5 p-4 text-xl rounded-2xl bg-gray-100">
          <h1 className="pl-3 font-semibold ">Break Time</h1>
          <h1 className="pr-4  ">{breakTime} seconds</h1>
        </div>
        <button className="bg-indigo-500 rounded-xl text-white w-full my-3 py-2">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default ExerciseDetails;
