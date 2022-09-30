import React, { useState } from "react";
import ExerciseDetails from "./ExerciseDetails";

const BreakTime = () => {
  const [breakTime, setBreakTime] = useState([]);



  const [activeButton, setActiveButton] = useState("");

  const handleClick = (e) => {
    const { name } = e.target;
    const btnValue = e.target.innerHTML;
    const numBtnValue = parseInt(btnValue.slice(0, -1));
    
    setBreakTime(numBtnValue);
    setActiveButton(name);
    
  };


  if (breakTime) {
    localStorage.setItem('Break-Time', JSON.stringify(breakTime));
  }
  

  return (
    <div>

      <div className="mt-5 p-4 grid font-semibold text-xl grid-cols-5  justify-items-center rounded-2xl bg-gray-100">
        <button
          name="1st"
          onClick={handleClick}
          className={`${activeButton === "1st" ? "bg-indigo-600 text-white" : "bg-white"
            } rounded-full p-2`}
        >
          10s
        </button>
        <button
          name="2nd"
          onClick={handleClick}
          className={`${activeButton === "2nd" ? "bg-indigo-600 text-white" : "bg-white"
            } rounded-full p-2`}
        >
          20s
        </button>
        <button
          name="3rd"
          onClick={handleClick}
          className={`${activeButton === "3rd" ? "bg-indigo-600 text-white" : "bg-white"
            } rounded-full p-2`}
        >
          30s
        </button>
        <button
          name="4th"
          onClick={handleClick}
          className={`${activeButton === "4th" ? "bg-indigo-600 text-white" : "bg-white"
            } rounded-full p-2`}
        >
          40s
        </button>
        <button
          name="5th"
          onClick={handleClick}
          className={`${activeButton === "5th" ? "bg-indigo-600 text-white" : "bg-white"
            } rounded-full p-2`}
        >
          50s
        </button>
      </div>
      <h1 className="text-3xl font-semibold mt-4 ">Exercise Details</h1>
      <ExerciseDetails breakTime={breakTime}></ExerciseDetails>
    </div>
  );
};

export default BreakTime;
