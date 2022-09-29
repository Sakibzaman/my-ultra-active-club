import React from "react";
import userImg from "../../../resources/images/user.jpg";

const VerticalBar = () => {
  return (
    <div>
      <div>
        <div>
          <img src={userImg} alt="user image" />
          <h1>Sakib Zaman</h1>
          <div className="flex">
            <img
              className="w-2"
              src="https://www.kindpng.com/picc/m/108-1084511_location-grey-vector-icon-hd-png-download.png"
              alt="Location Grey Vector Icon"
            ></img>
            <small>Kuril, Dhaka</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalBar;
