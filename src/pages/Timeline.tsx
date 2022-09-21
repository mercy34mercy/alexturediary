import React from 'react'
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { GetAlldiaryQuery, useGetAlldiaryQuery, useGetuserQuery } from '../generated/graphql';
import { Diary } from '../components/templates/FeedView';
import { FeedView } from '../components/templates/FeedView';
import Header from '../components/atoms/Header';
import Loading from '../components/atoms/Loading';
import { Transition } from 'react-transition-group';


export const getMonthNameFromDiary = (dateString: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date(dateString).getMonth()];
}

const TimelineWrapper = () => {
    const { loading } = useGetAlldiaryQuery()
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
            <Timeline/>
        </>
    )

}

const Timeline = () => {

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
                    "Userid":"",
                    "Name":""
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
                    "Userid":"",
                    "Name":""
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

    // const [isLoading, setIsLoading] = useState(true)

    // top: ${props => props.loaded? "50%" : 0};


    // const WindowCover = styled.div.attrs((props: WindowCoverProps) => ({
    //     state: props.state || "exited",
    // }))`

    // const WindowCover = styled.div<WindowCoverProps>`
    //     position: fixed;
    //     top: ${(props) => (props.state == "entering" || props.state == "entered" ? "100%" : "0")};
    //     width: 100%;
    //     height: 100%;
    //     z-index: 999;
    //     background-color: pink;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     transition: all .5s ease-in-out;
    // `

    if (error) {
        return <p>Error!</p>
    }

    console.log(data);

    // document.getElementById("loading_cover")?.classList.add("cover_animation")

    return (
        <>
            <FeedView data={data || defaultData} />
            <Header />
        </>
    )
}

export default TimelineWrapper