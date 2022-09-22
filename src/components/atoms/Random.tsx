import { Any } from "@react-spring/types";
import React from "react";
import "../../stylesheets/animation.css";
import { getNearestPostIndex, getDiaryFromIndex } from '../../pages/Timeline'

type prop = {
  emotion: object;
};

export const RandomObject = () => {
  const randomWidth = Math.floor(Math.random() * window.outerWidth);
  const randomAnimationDulation = Math.random() * 2 + 4;
  const randomHeight = Math.floor(Math.random() * 300);
  const randomsSize = Math.floor(Math.random() * 100);

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

  if(Number(getDiaryFromIndex(getNearestPostIndex()).Emotion.Fear) > 0) {
    displaycolor = arr[0].color
  }
  else if((Number(getDiaryFromIndex(getNearestPostIndex()).Emotion.Sad)) > 0) {
    displaycolor = arr[1].color
  }
  else if((Number(getDiaryFromIndex(getNearestPostIndex()).Emotion.Surprise)) > 0) {
    displaycolor = arr[2].color
  }
  else {
    displaycolor = arr[3].color
  }

  console.log(getDiaryFromIndex(getNearestPostIndex()).Emotion);
  

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
              position: "fixed",
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
