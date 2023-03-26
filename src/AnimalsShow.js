import { useState } from "react";
import "./AnimalShow.css";
import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import horse from "./images/horse.svg";
import heart from "./images/heart.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
};

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const onClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={onClick}>
      <img
        className="animal"
        alt="animal"
        src={svgMap[type]}
        style={{ width: 150 }}
      />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
};

export default AnimalShow;
