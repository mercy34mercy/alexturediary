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

  const inputemotion = "neg"
  let displayemotion = ""
  var arr = [
    {
      id: 1,
      emotion: "happy",
      color: "orange"
    },
    {
      id: 2,
      emotion: "neg",
      color: "green"
    },
    {
      id: 3,
      emotion: "happy",
      color: "green"
    },
    {
      id: 4,
      emotion: "happy",
      color: "skyblue"
    },
    {
      id: 5,
      emotion: "happy",
      color: "purple"
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
