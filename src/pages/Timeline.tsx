import React from 'react'
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { GetAlldiaryQuery, GetAlldiaryQueryResult, useGetAlldiaryQuery, useGetuserQuery } from '../generated/graphql';
import { Diary } from '../components/templates/FeedView';
import { FeedView } from '../components/templates/FeedView';
import Header from '../components/atoms/Header';
import Loading from '../components/atoms/Loading';
import { Transition } from 'react-transition-group';
import { animateScroll, scroller } from 'react-scroll';


export const getMonthNameFromDiary = (dateString: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date(dateString).getMonth()];
}

const TimelineWrapper = () => {
    const { data, error, loading } = useGetAlldiaryQuery()

    if (error) {
        return <p>Error!</p>
    }

    const [isLoaded, setIsLoaded] = useState(false)
    const [beforeScroll, setBeforeScroll] = useState(window.pageYOffset)

    useEffect(() => {
        setTimeout(() => {
            setInterval(() => {
                if (Math.floor(beforeScroll) % 500 != 0){
                    if (beforeScroll == window.pageYOffset) {
                        const index = getNearestPostIndex()
                        console.log("scrolled to post_" + index);
                        animateScroll.scrollTo(index * 500, {
                            duration: 800,
                            // delay: 100,
                            smooth: true,
                        })
                    }
                }
                setBeforeScroll(window.pageYOffset)
            }, 300)
        }, 400)

        const getNearestPostIndex = () => {
            const scroll = window.pageYOffset
            if (scroll % 500 < 250) {
                return Math.floor(scroll / 500)
            } else {
                return Math.floor(scroll / 500 + 1)
            }
        }
    })

    if (!loading && !isLoaded) {
        setIsLoaded(true)
        animateScroll.scrollTo(2000, { duration: 0, smooth: false })
        setTimeout(() => {
            animateScroll.scrollToTop({ duration: 1300, smooth: "cubic-bezier(.13,.08,0,1)" })
        }, 20);
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

    // const { data, error, loading } = useGetAlldiaryQuery()

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


    // console.log(data);

    return (
        <>
            <FeedView data={prop.data || defaultData} />
            <Header />
        </>
    )
}

export default TimelineWrapper