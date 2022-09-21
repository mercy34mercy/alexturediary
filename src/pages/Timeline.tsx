import React from 'react'
import { Diary, useGetAlldiaryQuery, useGetuserQuery } from '../generated/graphql';
import { FeedView } from '../components/templates/FeedView';
import Header from '../Header';


export const getMonthNameFromDiary = (dateString: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[new Date(dateString).getMonth()];
}

const Timeline = () => {
    const { data, error, loading } = useGetAlldiaryQuery()
    if (loading) {
        return <p>...loading</p>
    }

    if (error) {
        return <p>Error!</p>
    }

    if (data == undefined) {
        return <p>Error!</p>
    }

    return (
        <div>
            <FeedView data={data}/>
            <Header/>
        </div>
    )
}

export default Timeline