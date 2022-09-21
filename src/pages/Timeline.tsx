import React from 'react'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Diary, useGetAlldiaryQuery, useGetuserQuery } from '../generated/graphql';
import { FeedView } from '../components/templates/FeedView';
import Header from '../components/atoms/Header';
import Loading from '../components/atoms/Loading';


export const getMonthNameFromDiary = (dateString: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date(dateString).getMonth()];
}

const Timeline = () => {
    const { data, error, loading } = useGetAlldiaryQuery()
    const [isLoading, setIsLoading] = useState(true)

    const WindowCover = styled.div`
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 999;
        text-align: center;
    `

    if (loading) {
        return (
            <>
                {isLoading && (
                    <div>
                        {/* <WindowCover className=""></WindowCover> */}
                        <Loading />
                    </div>
                )}
            </>
        );
    }

    if (error) {
        return <p>Error!</p>
    }

    if (data == undefined) {
        return <p>Error!</p>
    }

    // document.getElementById("loading_cover")?.classList.add("cover_animation")

    let animate = false
    window.setTimeout(function () { animate = true }, 100);

    return (
        <div>
            {/* <WindowCover className={animate ? "cover_animation" : ""}></WindowCover> */}
            <FeedView data={data}/>
            <Header/>
        </div>
    )
}

export default Timeline