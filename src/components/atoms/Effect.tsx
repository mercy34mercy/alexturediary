import React, { useEffect } from "react";
import { useGetAlldiaryQuery } from "../../generated/graphql";
import { getNearestPostIndex } from "../../pages/Timeline";
import { BackgroundTriangles } from "./BackgroundTriangles";

const Effect = () => {
  const { data, error, loading } = useGetAlldiaryQuery();

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("in the useeffect")
      console.log(data,loading,error)
      if (data != undefined) {
        console.log("asfdfsdf")
        if (parseInt(data.AllDiary[getNearestPostIndex()].Emotion.Angry) > 0) {
          console.log("djfaskdfsaj")
          return <BackgroundTriangles />;
        }
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  const SelectEffect = () => {
    if (data !== undefined) {
      if (parseInt(data.AllDiary[getNearestPostIndex()].Emotion.Angry) > 0) {
        console.log(
          "angry",
          data.AllDiary[getNearestPostIndex()].Emotion.Angry
        );
        return <BackgroundTriangles />;
      } else {
        return <div></div>;
      }
    } else {
      console.log("angry");
      return <BackgroundTriangles />;
    }
  };

  return <div>{SelectEffect()}</div>;
};

export default Effect;
