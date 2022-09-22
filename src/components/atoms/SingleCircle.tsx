import React, { useEffect, useState } from "react";
import { getDiaryFromIndex, getNearestPostIndex, isPostCentered } from "../../pages/Timeline";
import '../../stylesheets/SingleCircle.css'
import styled from 'styled-components'
import { CSSTransition } from "react-transition-group";


export const BackgroundRandomCircles = () => {

    const [isDisplay, setDisplay] = useState(false)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplay(isPostCentered())
        }, 200)

        return () => clearInterval(intervalId)
    }, [])

    const randomWidth = Math.floor(Math.random() * window.outerWidth);
    const randomAnimationDulation = Math.random() * 2 + 4;
    const randomHeight = Math.floor(Math.random() * 300);
    const randomsSize = Math.floor(Math.random() * 100);

    const inputemotion = "neg"
    let displayColor = "";

    const arr = [
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

  if(Number(getDiaryFromIndex(getNearestPostIndex()).Emotion.Fear) > 0) {
    displayColor = arr[0].color
    }
  else if((Number(getDiaryFromIndex(getNearestPostIndex()).Emotion.Sad)) > 0) {
    displayColor = arr[1].color
  }
  else if((Number(getDiaryFromIndex(getNearestPostIndex()).Emotion.Surprise)) > 0) {
    displayColor = arr[2].color
  }
  else {
    displayColor = arr[3].color
  }

  console.log(getDiaryFromIndex(getNearestPostIndex()).Emotion);
  

    return (
        <BackgroundContainer>
            <CSSTransition in={isDisplay} timeout={1500} classNames="fade">
                <div
                    className="animation-box"
                    style={{
                        backgroundColor: displayColor,
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
            </CSSTransition>
        </BackgroundContainer>
    );
};

const BackgroundContainer = styled.div`
    position: fixed;
    font-size: 300px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: right;
    /* opacity: 0; */

    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: all 1s ease;
        opacity: 1;
    }
    .fade-enter-done {
        opacity: 1;
    }
    .fade-exit {
        opacity: 1;
    }
    .fade-exit-active {
        transition: all 1s ease;
        opacity: 0;
}
`

export default BackgroundRandomCircles
