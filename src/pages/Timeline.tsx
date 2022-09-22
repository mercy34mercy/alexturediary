import React from 'react'
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { GetAlldiaryQuery, useGetAlldiaryQuery, Diary } from '../generated/graphql';
import { FeedView } from '../components/templates/FeedView';
import Header from '../components/atoms/Header';
import Loading from '../components/atoms/Loading';
import { Transition } from 'react-transition-group';
import { animateScroll, scroller } from 'react-scroll';

export const getMonthNameFromDiary = (dateString: string): string => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date(dateString).getMonth()];
}

export const getNearestPostIndex = (): number => {
    const scroll = window.pageYOffset
    if (scroll % 500 < 250) {
        return Math.floor(scroll / 500)
    } else {
        return Math.floor(scroll / 500 + 1)
    }
}

export const isPostCentered = (): boolean => {
    return (window.pageYOffset % 500 == 0)
}

export const getAlldiaryQueryWrapper = (): GetAlldiaryQuery => {
        const { data, error, loading } = useGetAlldiaryQuery()

        const defaultData = {
            "AllDiary": [
                {
                    "__typename": "Diary",
                    "Diaryid": "",
                    "Imageurl": "",
                    "Word": "",
                    "CreatedAt": "",
                    "UpdatedAt": "",
                    "User": {
                        "__typename": "User",
                        "Userid": "",
                        "Name": ""
                    },
                    "Emotion": {
                        "__typename": "Emotion",
                        "Sad": "",
                        "Happy": "",
                        "Fear": "",
                        "Surprise": "",
                        "Angry": ""
                    }
                },
                {
                    "__typename": "Diary",
                    "Diaryid": "",
                    "Imageurl": "",
                    "Word": "",
                    "CreatedAt": "",
                    "UpdatedAt": "",
                    "User": {
                        "__typename": "User",
                        "Userid": "",
                        "Name": ""
                    },
                    "Emotion": {
                        "__typename": "Emotion",
                        "Sad": "",
                        "Happy": "",
                        "Fear": "",
                        "Surprise": "",
                        "Angry": ""
                    }
                }
            ]
        } as GetAlldiaryQuery

        return data || defaultData
}

export const getDiaryFromIndex = (index: number): Diary => {
    const data = getAlldiaryQueryWrapper()
    var reversedAllDiary: Array<any> = []
    data.AllDiary.slice(0).reverse().map((d) => {
        reversedAllDiary.push(d)
    })
    
    // console.log(reversedAllDiary);
    // console.log(reversedAllDiary[index]);
    
    return reversedAllDiary[index]
}

const TimelineWrapper = () => {
    const { data, error, loading } = useGetAlldiaryQuery()

    if (error) {
        return <p>Error!</p>
    }

    const [isLoaded, setIsLoaded] = useState(false)
    const beforeScroll = useRef(window.pageYOffset)
    // const [isPostCentered, setIsPostCentered] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (Math.floor(window.pageYOffset) % 500 != 0){                
                if (beforeScroll.current == window.pageYOffset) {
                    const index = getNearestPostIndex()
                    console.log("scrolled to post_" + index);
                    animateScroll.scrollTo(index * 500, {
                        duration: 800,
                        // delay: 100,
                        smooth: true,
                    })
                }
            }
            beforeScroll.current = window.pageYOffset
        }, 300)

        return ()=> clearInterval(intervalId)
    }, [])

    if (!loading && !isLoaded) {
        setIsLoaded(true)
        
        animateScroll.scrollTo(2000, { duration: 0, smooth: false })
        setTimeout(() => {
            animateScroll.scrollToTop({ duration: 1300, smooth: "cubic-bezier(.13,.08,0,1)" })
        }, 20);        

        console.log("Scroll observation started.");
    }

    const nodeRef = useRef(null);

    type WindowCoverProps = {
        state?: string
    }
    const defaultStyle = {
        position: 'fixed',
        top: 0,
        transition: `all 0.5s cubic-bezier(.75,0,.79,.23)`,
        width: '100%',
        height: '100%',
        'z-index': '999',
        'background-color': 'var(--color-sub)',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
    }

    const transitionStyles = {
        entering: { top: '100%' },
        entered: { top: '100%' },
        exiting: { top: 0 },
        exited: { top: 0 },
    };

    return (
        <>
            <Transition nodeRef={nodeRef} in={!loading} timeout={3000}>
                {(state) => (
                    <div ref={nodeRef} style={{
                        ...defaultStyle,
                        // @ts-ignore
                        ...transitionStyles[state]
                    }}>
                        <Loading />
                    </div>
                )}
            </Transition>
            <Timeline data={data} />
        </>
    )



}

type prop = {
    data: any
}

const Timeline = (prop: prop) => {

    const { data, error, loading } = useGetAlldiaryQuery()

    const defaultData = {
        "AllDiary": [
            {
                "__typename": "Diary",
                "Diaryid": "",
                "Imageurl": "",
                "Word": "",
                "CreatedAt": "",
                "UpdatedAt": "",
                "User": {
                    "__typename": "User",
                    "Userid": "",
                    "Name": ""
                },
                "Emotion": {
                    "__typename": "Emotion",
                    "Sad": "",
                    "Happy": "",
                    "Fear": "",
                    "Surprise": "",
                    "Angry": ""
                }
            },
            {
                "__typename": "Diary",
                "Diaryid": "",
                "Imageurl": "",
                "Word": "",
                "CreatedAt": "",
                "UpdatedAt": "",
                "User": {
                    "__typename": "User",
                    "Userid": "",
                    "Name": ""
                },
                "Emotion": {
                    "__typename": "Emotion",
                    "Sad": "",
                    "Happy": "",
                    "Fear": "",
                    "Surprise": "",
                    "Angry": ""
                }
            }
        ]
    } as GetAlldiaryQuery


    console.log(data);

    return (
        <>
            <FeedViewEnglishBackground />
            <FeedView data={data || defaultData} />
            <Header />
        </>
    )
}

export default TimelineWrapper