import React from 'react'
import { useEffect, useState } from 'react';
import { Diary, useGetAlldiaryQuery, useGetuserQuery } from '../generated/graphql';
import { FeedView } from '../components/templates/FeedView';
import Header from '../components/atoms/Header';
import Loading from '../components/atoms/Loading';
import Animation from '../animation';



export const getMonthNameFromDiary = (dateString: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date(dateString).getMonth()];
}

const Timeline = () => {
    const { data, error, loading } = useGetAlldiaryQuery()
    const [isLoading,setIsLoading] = useState(true)

    if (loading) {
        return (
            <>
            {isLoading && <Loading/>}
            </>
            );
    }

    if (error) {
        return <p>Error!</p>
    }

    if (data == undefined) {
        return <p>Error!</p>
    }

    return (
        <div>
            <Animation></Animation>
            <FeedView data={data}/>
        </div>
    )
}

export default Timeline