import React from "react";
import BreakTime from "./BreakTime";
import ExerciseDetails from "./ExerciseDetails";
import UserInfo from "./UserInfo";

const VerticalBar = () => {
  return (
    <div className=" min-h-screen">
      <div className="px-4">
        <UserInfo></UserInfo>
        <BreakTime></BreakTime>
        <ExerciseDetails></ExerciseDetails>
      </div>
    </div>
  );
};

export default VerticalBar;
