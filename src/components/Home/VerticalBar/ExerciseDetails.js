import React from "react";

const ExerciseDetails = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold ">Exercise Details</h1>
      <div className="flex flex-col">
        <div className="mt-5 p-4 text-xl rounded-2xl bg-gray-100">
          <h1>Exercise Time </h1>
        </div>
        <div className="mt-5 p-4 text-xl rounded-2xl bg-gray-100">
          <h1>Break Time</h1>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
