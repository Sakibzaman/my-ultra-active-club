import React from "react";
import userImg from "../../../resources/images/user.jpg";
import locationLogo from "../../../resources/logo/location_logo.png";

const UserInfo = () => {
  return (
    <div className="">
      <div className="flex mt-8 lg:mx-4">
        <img
          className="mr-5 w-16 rounded-full"
          src={userImg}
          alt="user image"
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Sakib Zaman</h1>
          <div className="flex">
            <img className="mr-2 h-4" src={locationLogo}></img>
            <small>Kuril, Dhaka</small>
          </div>
        </div>
      </div>
      <div className="mt-5 p-4 grid grid-cols-3  justify-items-center rounded-2xl bg-gray-100">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">
            65<small className="text-slate-400 text-lg">kg</small>
          </h1>
          <p className="text-slate-600 font-semibold">Weight</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">5.7</h1>
          <p className="text-slate-600 font-semibold">Height</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">
            27<small className="text-slate-400 text-lg">Yrs</small>
          </h1>
          <p className="text-slate-600 font-semibold">Age</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
