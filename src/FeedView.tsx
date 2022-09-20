import { useEffect, useState } from 'react';
import React from 'react';
import { useGetuserQuery } from './generated/graphql'
import Loading from './Loading ';

export const FeedView = () => {
    const { data, error, loading } = useGetuserQuery({ variables: { argument: "abcdef" }, });

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
        <ul>
            {data.User.Diary.map((d) => (
                <li key={d.Diaryid}>
                    {/* <p>{d.User.Name}</p> */}
                    <p>{d.Word}</p>
                    <img src={d.Imageurl} alt="" />
                    <p>{d.CreatedAt}</p>
                </li>
            ))}
        </ul>
    );
}