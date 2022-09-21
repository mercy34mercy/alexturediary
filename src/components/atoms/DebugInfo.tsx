import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ReactDOM } from 'react'
import { getNearestPostIndex, isPostCentered } from '../../pages/Timeline'

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

    return (
        <FixedTextBox id='DebugInfo'>
            pageYoffset: {pageYoffset}
            <br />
            nearestPostIndex: {getNearestPostIndex()}
            <br />
            isPostCentered: {isPostCentered().toString()}
        </FixedTextBox>
    )
}