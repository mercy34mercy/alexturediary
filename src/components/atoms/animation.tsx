import React from "react";
<<<<<<< HEAD:src/components/atoms/BackgroundRandomCircles.tsx
import { BackgroundRandomCircles as SingleCircle } from "./SingleCircle";
=======
import { RandomObject } from "./Random";
import { isPostCentered } from "../../pages/Timeline";
>>>>>>> 39f23ec8fb52bdbd731bb418cffc8480e465786b:src/components/atoms/animation.tsx

const BackgroundRandomCircles = () => {
  

  const len: number = Math.floor(Math.random() * 100);

  var loop = () => {
    const items = [];
    for (let i = 0; i < len; i++) {
      items.push(<SingleCircle />);
    }
    return <ul>{items}</ul>;
  };

  return <div> {loop()}</div>;
};

export default BackgroundRandomCircles;
