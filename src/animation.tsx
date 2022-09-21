import React from "react";
import { RandomObject } from "./components/atoms/Random";

const Animation = () => {
  
  const len: number = Math.floor(Math.random() * 100);

  var loop = () => {
    const items = [];
    for (let i = 0; i < len; i++) {
      items.push(<RandomObject />);
    }
    return <ul>{items}</ul>;
  };

  return <div> {loop()}</div>;
};

export default Animation;
