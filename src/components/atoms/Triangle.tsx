import { Any } from "@react-spring/types";
import React from "react";
import '../../stylesheets/Triangle.css'

export const Triangle = () => {
  
  return (
    <>
    <div style={{
      // marginTop: "500px",
      // borderStyle: "outset",
      // transform: "scale(0.2)"
    }}>
      <div className="triangle-fromleft">
      </div>
      <div className="triangle-bottomleft">
      </div>
      <div className="triangle-buttomright">
      </div>
      <div className="triangle-fromright">
      </div>
      <div className="triangle-topright">
      </div>
    </div>
    </>
  );
};

export default Triangle
