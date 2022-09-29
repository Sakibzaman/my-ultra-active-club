import React from "react";
import logo from "../../../resources/logo/logo.jpeg";

const Header = () => {
  return (
    <div className="flex mt-24">
      <img className="w-10 mr-3 rounded-full" src={logo} alt="Gym Hero Logo" />
      <h1 className="text-3xl text-indigo-600 uppercase font-bold">
        Gym Heroes
      </h1>
    </div>
  );
};

export default Header;
