import React, { useState } from "react";

const BreakTime = () => {
  const btnDetails = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 },
  ];

  const [selected, setSelected] = useState(0);
  //   const [state, setState] = useState(0);
  const [bgColor, setBgColor] = useState({});
  const handleBtnColor = (btnDetails) => {
    setSelected(btnDetails.id);
    setBgColor("indigo");
  };

  return (
    <div>
      <h1 className="text-2xl capitalize ">Add A Break</h1>
      <div className="mt-5 p-4 grid font-semibold text-xl grid-cols-5  justify-items-center rounded-2xl bg-gray-100">
        {btnDetails.map((detail) => (
          <button
            onClick={handleBtnColor}
            className={` rounded-full p-3`}
            key={detail.id}
          >
            {detail.value}
          </button>
        ))}

        {/* <button
          onClick={handleClick}
          className={`${
            isActive === true ? "bg-indigo-600" : "bg-white"
          } rounded-full p-2`}
        >
          10s
        </button>
        <button
          onClick={handleClick}
          className={`${
            isActive === true ? "bg-indigo-600" : "bg-white"
          } rounded-full p-2`}
        >
          20s
        </button>
        <button
          onClick={handleClick}
          className={`${
            isActive === true ? "bg-indigo-600" : "bg-white"
          } rounded-full p-2`}
        >
          30s
        </button>
        <button
          onClick={handleClick}
          className={`${
            isActive === true ? "bg-indigo-600" : "bg-white"
          } rounded-full p-2`}
        >
          40s
        </button>
        <button
          onClick={handleClick}
          className={`${
            isActive === true ? "bg-indigo-600" : "bg-white"
          } rounded-full p-2`}
        >
          50s
        </button> */}
      </div>
    </div>
  );
};

export default BreakTime;
