import React from "react";
import BreakTime from "./BreakTime";
import RequiredTime from "./RequiredTime";
import UserInfo from "./UserInfo";

const VerticalBar = ({ cardDataCollection, exercise }) => {

  return (
    <div className="lg:min-h-screen py-10 lg:py-0 mt-20 lg:mt-0">
      <div className="px-4">
        <UserInfo></UserInfo>
        <BreakTime cardDataCollection={cardDataCollection}></BreakTime>
        <RequiredTime exercise={exercise} cardDataCollection={cardDataCollection}></RequiredTime>
      </div>
    </div>
  );
};

export default VerticalBar;
