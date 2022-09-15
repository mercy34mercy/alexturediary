import React from 'react';
import { useGetuserQuery } from './generated/graphql'
 

export const MyComponent = () => {
    const { loading, data } = useGetuserQuery({  variables: {argument: "abcdef"},});
  if(!loading && data != undefined){
    return(
        <div>
            {data.User.Diary[0].Diaryid}
        </div>
    )}else{
        return(
        <div>
            {"#fdadfsa"}
        </div>
        )
  }
}