import React from "react";
import { GetAlldiaryQuery, useGetuserQuery } from "../../generated/graphql";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { getMonthNameFromDiary } from "../../pages/Timeline";

export type Diary =  {
    __typename?: "Query" | undefined;
    AllDiary: {
        __typename?: "Diary" | undefined;
        Diaryid: string;
        Imageurl: string;
        Word?: string | null | undefined;
        CreatedAt: any;
        UpdatedAt: any;
        User: {
        __typename?: "User" | undefined;
            Userid: string;
            Name:string;
        };
        Emotion: {
        __typename?: "Emotion" | undefined;
            Sad:string;
            Happy:string;
            Fear:string;
            Surprise:string;
            Angry:string;
        };
    }[];
}

type prop = {
    data:GetAlldiaryQuery
}


export const FeedView = (prop: prop) => {
    var prop_temp = {
        User: {
            __typename: "Me",
            User: {
                __typename: "User",
                Userid: "abcdef",
                Name: "ひろき",
            },
            Diary: [
                {
                    __typename: "Diary",
                    Diaryid: "1",
                    Word: "明日も楽しみ",
                    Imageurl:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbb5DmzGmIeqZU5CAtW5uOpPIBbE2bJrsbfBcTXotC&s",
                    CreatedAt: 1663667972,
                    CreatedAtDay: 20,
                    CreatedAtMonth: "september",
                    UpdatedAt: 1663667972,
                    User: {
                        __typename: "User",
                        Userid: "abcdef",
                        Name: "Hiroki",
                    },
                },
                // {
                //     __typename: "Diary",
                //     Diaryid: "2",
                //     Word: "今日は楽しかった",
                //     Imageurl:
                //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbb5DmzGmIeqZU5CAtW5uOpPIBbE2bJrsbfBcTXotC&s",
                //     CreatedAt: 1663523523,
                //     CreatedAtDay: 19,
                //     CreatedAtMonth: "may",
                //     UpdatedAt: 1663523523,   
                //     User: {
                //         __typename: "User",
                //         Userid: "abcdef",
                //         Name: "ひろき",
                //     },
                // },
            ],
            Followee: [
                {
                    __typename: "UserDiary",
                    User: {
                        __typename: "User",
                        Userid: "watnow2022",
                        Name: "watnow",
                    },
                    Diary: [],
                },
            ],
            Follower: [],
        },
    };

    const BaseText = styled.a`
        font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, YuGothic, "Yu Gothic Medium", "Yu Gothic", Verdana, Meiryo, sans-serif;
    `

    const BasePostText = styled(BaseText)`
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: #393939;
    `

    const UserName = styled(BasePostText)`
        font-size: 24px;
        letter-spacing:0.02em;
        color: #BEBEBE;
        text-align: left;
        position: absolute;
        left: 0px;
        bottom: 0px;
    `

    const WordContainer = styled.div`
        font-size: 36px;
        color: #000000;
        position: absolute;
        text-align: left;
        width: 240px;
        height: auto;
        left:0px;
        bottom: 30px;
    `
    const PostWord = styled(BasePostText)`
        color: black;
        // color: #ededed;
        // mix-blend-mode: exclusion;
    `

    const CreatedAtContainer = styled.div`
        position: absolute;
        text-align: left;
        width: 266px;
        height: 58px;
        left: 0px;
        top: -15px;
    `

    const CreatedAtDay = styled(BasePostText)`
        font-size: 60px;
        /* position: absolute; */
        /* width: 79px;
        height: 58px;
        left: 0px;
        top: -15px; */
    `

    const CreatedAtMonth = styled(BasePostText)`
        font-size: 18px;
        margin-left: 12px;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        /* position: absolute;
	    bottom: 0; */
    `

    const PostContainer = styled.div`
        background-color: white;
    `

    const PostDiv = styled.div`
        width: 555px;
        height: 300px;
        /* background-color: pink; //debug */
        margin: 0 auto;
        margin-top: 120px;
        position: relative;
    `

    const PostImageWrap = styled.div`
        width: 300px;
        height: 300px;
    `

    const PostImage = styled.img`
        width: 300px;
        height: 300px;
        object-fit: cover;
        position: absolute;
        top: 0;
        right: 0;
    `


    return (
        <PostContainer>
            {/* {prop_temp.User.Diary.map((d) => ( */}
            {prop.data.AllDiary.slice(0).reverse().map((d) => (
                <PostDiv>
                    <CreatedAtContainer>
                        <CreatedAtDay>{new Date(d.CreatedAt).getDay()}</CreatedAtDay>
                        <CreatedAtMonth>{getMonthNameFromDiary(d.CreatedAt)}</CreatedAtMonth>
                    </CreatedAtContainer>
                    <PostImageWrap>
                        <PostImage src={d.Imageurl} alt=""/>
                    </PostImageWrap>
                    <WordContainer>
                        <BasePostText>
                            <PostWord>{d.Word}</PostWord>
                        </BasePostText>
                    </WordContainer>
                    <UserName>{d.User.Name}</UserName>
                </PostDiv>
            ))}
        </PostContainer>

    );
};
