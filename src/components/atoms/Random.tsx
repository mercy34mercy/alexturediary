import { Any } from "@react-spring/types";
import React from "react";
import '../../stylesheets/animation.css'

type prop = {
  emotion: object
}

export const RandomObject = () => {
  const randomWidth = Math.floor(Math.random() *window.outerWidth);
  const randomAnimationDulation = Math.random() * 2 + 4;
  const randomHeight = Math.floor(Math.random() * 300);
  const randomsSize = Math.floor( Math.random() * 100);

  // console.log(prop.emotion);

  const inputemotion = "Sad"
  let displayemotion = ""
  var arr = [
    {
      id: 1,
      emotion: "Fear",
      color: "skyblue"
    },
    {
      id: 2,
      emotion: "Sad",
      color: "blue"
    },
    {
      id: 3,
      emotion: "Surprise",
      color: "yellow"
    },
    {
      id: 4,
      emotion: "Happy",
      color: "orange"
    },
  ]
  
  for(var i=0;i<5;i++){
    if(arr[i].emotion == inputemotion)
    displayemotion = arr[i].color
  }
  
  return (
    <>
    <div>
      <div className="">
      <div
        className="animation-box"
        style={{
          backgroundColor: displayemotion,
          borderRadius: "50%",
          animationDuration: randomAnimationDulation + "s",
          marginTop: 120,
          height: randomsSize + 20,
          width: randomsSize + 20,
          position: "absolute",
          right: randomWidth,
          top: randomHeight,
        }}
      >
      </div>
      </div>
    </div>
    </>
  );
};

export default RandomObject
