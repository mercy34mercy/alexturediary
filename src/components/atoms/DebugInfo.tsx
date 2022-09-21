import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ReactDOM } from 'react'

const FixedTextBox = styled.div`
    position: fixed;
    top: 100;
    left: 30;
    font-size: 16px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    text-align: left;
`



export const DebugInfo = () => {
    
    const [pageYoffset, setpageYoffset] = React.useState(window.pageYOffset)
    window.addEventListener('scroll', () =>setpageYoffset(window.pageYOffset) )
    
    const getNearestPostIndex = ()=>{
        const scroll = window.pageYOffset
        if (scroll % 500 < 250){
            return Math.floor(scroll / 500)
        }else{
            return Math.floor(scroll / 500 + 1)
        }
    }

    return (
        <FixedTextBox id='DebugInfo'>
            pageYoffset: {pageYoffset}
            <br />
            nearestPostIndex: {getNearestPostIndex()}
            <br />
            isPostCentered: {(window.pageYOffset % 500 == 0).toString()}
        </FixedTextBox>
    )
}