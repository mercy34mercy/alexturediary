import React from "react";
import { BackgroundRandomCircles as SingleCircle } from "./SingleCircle";
import { isPostCentered } from "../../pages/Timeline";

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
