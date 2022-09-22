import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'
import { getAlldiaryQueryWrapper, getNearestPostIndex, getDiaryFromIndex, isPostCentered } from '../../pages/Timeline'

const FeedViewEnglishBackground = () => {
    const [isDisplay, setDisplay] = useState(false)
    useEffect(() => {
        const intervalId = setInterval(()=> {
            setDisplay(isPostCentered())
        }, 200)

        return ()=>clearInterval(intervalId)
    },[])

    return (
        <EnglishBackgroundContinaer>
            <CSSTransition in={isDisplay} timeout={1500} classNames="fade" unmountOnExit>
                <BackgroundText>{getDiaryFromIndex(getNearestPostIndex()).Englishword}</BackgroundText>
            </CSSTransition>
        </EnglishBackgroundContinaer>
    )
}

const BackgroundText = styled.a`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #393939;
`

const EnglishBackgroundContinaer = styled.div`
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
        opacity: 0.06;
    }
    .fade-enter-done {
        opacity: 0.06;
    }
    .fade-exit {
        opacity: 0.06;
    }
    .fade-exit-active {
        transition: all 1s ease;
        opacity: 0;
}
`
export default FeedViewEnglishBackground