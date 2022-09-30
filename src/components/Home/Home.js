import React, { useEffect, useState } from "react";
import Activities from "./Activities/Activities";
import ActivityCard from "./Activities/ActivityCard";
import Header from "./Header/Header";
import VerticalBar from "./VerticalBar/VerticalBar";
import useData from '../../Hooks/useData'
import { addToDb, getSelected } from "../Utilities/fakedb"

const Home = () => {
  const [cardDataCollection, setCardDataCollection] = useData(); //[data, setData]
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    const storedExercise = getSelected();
    const savedExercise = [];
    for (const id in storedExercise) {
      const addedExercise = cardDataCollection.find(cardData => cardData.id === id);
      if (addedExercise) {
        const quantity = storedExercise[id];
        addedExercise.quantity = quantity;
        savedExercise.push(addedExercise);
      }
    }
    setExercise(savedExercise);
  }, [cardDataCollection]);

  const handleAddToList = (selectedExercise) => {
    let newList = [];
    const exists = exercise.find(exercise => exercise.id === selectedExercise.id);
    if (!exists) {
      selectedExercise.quantity = 1;
      newList = [...exercise, selectedExercise];
    }
    else {
    const rest = exercise.filter(exercise => exercise.id !== selectedExercise.id);
      exists.quantity = exists.quantity + 1;
      newList = [...rest, exists];
    }

    setExercise(newList);
    addToDb(selectedExercise.id);
  }


  return (
    <div className="bg-transparent  lg:flex ">
      <div className=" lg:w-3/4 lg:mx-16">
        <Header ></Header>
        <Activities handleAddToList={handleAddToList} cardDataCollection={cardDataCollection}></Activities>
      </div>
      <div className="lg:w-1/4 rounded-2xl shadow-lg bg-white mx-5 lg:mx-0 ">
        <VerticalBar exercise={exercise} cardDataCollection={cardDataCollection}></VerticalBar>
      </div>
    </div>
  );
};

export default Home;
