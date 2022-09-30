import React from 'react';
import { toast } from 'react-toastify';

const RequiredTime = (props) => {
    const  list  = props.exercise;
    // console.log("selected card list: ", list);
    let totalTime = 0;
    let clickCount = 0;
    for (const exercise of list) {
        clickCount = clickCount + exercise.quantity;
        totalTime = totalTime + exercise.time * exercise.quantity;
    }
 
    const showToast = () =>{
        toast.success(`Congratulations, you have completed your activities for Today!!`)
        
    }
    return (
        <div>
            
            <div className="flex flex-col">
                <div className="mt-5 p-4 text-xl rounded-2xl bg-gray-100 flex justify-between">
                    <h1 className="pl-3 font-semibold ">Exercise Time </h1>
                    <h1 className="pr-4  "> {totalTime} seconds</h1>
                </div>
                <button onClick={showToast} className="bg-indigo-500 rounded-xl text-white w-full my-3 py-2">
                    Activity Completed
                    
                </button>
            </div>
            
        </div>
    );
};

export default RequiredTime;