import { Any } from "@react-spring/types";
import React from "react";
import "../../stylesheets/animation.css";


type prop = {
  emotion: object;
};

export const RandomObject = () => {
  const randomWidth = Math.floor(Math.random() * window.outerWidth);
  const randomAnimationDulation = Math.random() * 2 + 4;
  const randomHeight = Math.floor(Math.random() * 300);
  const randomsSize = Math.floor(Math.random() * 100);

  const inputemotion = "Sad";
  let displaycolor = "";
  var arr = [
    {
      id: 1,
      emotion: "Fear",
      color: "skyblue",
    },
    {
      id: 2,
      emotion: "Sad",
      color: "blue",
    },
    {
      id: 3,
      emotion: "Surprise",
      color: "yellow",
    },
    {
      id: 4,
      emotion: "Happy",
      color: "orange",
    },
  ];

  if (arr[i].emotion == inputemotion) displaycolor = arr[i].color;



  displaycolor = "red";

  return (
    <>
      <div>
        <div className="">
          <div
            className="animation-box"
            style={{
              backgroundColor: displaycolor,
              borderRadius: "50%",
              animationDuration: randomAnimationDulation + "s",
              marginTop: 150,
              height: randomsSize + 20,
              width: randomsSize + 20,
              position: "absolute",
              right: randomWidth,
              top: randomHeight,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default RandomObject;
