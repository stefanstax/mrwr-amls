import { useState } from "react";
import AnimalShow from "./AnimalsShow";
import "./App.css";

const App = () => {
  let [animals, setAnimals] = useState([]);

  const getRandomAnimal = () => {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  };

  const onClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow key={index} type={animal} />;
  });

  return (
    <div className="app">
      <button onClick={onClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
};

export default App;
