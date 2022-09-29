import React from "react";
import BreakTime from "./BreakTime";
import UserInfo from "./UserInfo";

const VerticalBar = (cardDatas) => {
  return (
    <div className="min-h-screen ">
      <div className="px-4">
        <UserInfo></UserInfo>
        <BreakTime cardDatas={cardDatas}></BreakTime>
      </div>
    </div>
  );
};

export default VerticalBar;
