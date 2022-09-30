import React from "react";

const ExerciseDetails = ({ breakTime }) => {


  return (
    <div>

      <div className="flex flex-col">

        <div className="flex justify-between mt-5 p-4 text-xl rounded-2xl bg-gray-100">
          <h1 className="pl-3 font-semibold ">Break Time</h1>
          <h1 className="pr-4 ">{breakTime} seconds</h1>
        </div>
        
      </div>
    </div>
  );
};

export default ExerciseDetails;
