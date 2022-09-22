import React from 'react'
import styled from 'styled-components'
import { getNearestPostIndex, isPostCentered } from '../../pages/Timeline'

const FixedTextBox = styled.div`
    position: fixed;
    top: auto;
    bottom: 90px;
    left: -30px;
    font-size: 12px;
    font-family: 'Courier New',Courier,monospace;
    font-weight: bold;
    text-align: left;
    rotate: 270deg;
    width: 200px;
    height: 80px;
    border-width: 4px;
    padding-left: 20px;
    background-image :
        linear-gradient(to top, #000, #000 8px, transparent 8px, transparent 8px);   /* 左の線 */
    background-size:
        4px 8px;   /* 左の線 */
    background-position:
        left bottom;   /* 左の線 */
    background-repeat:
        repeat-y;   /* 左の線 */
`



export const DebugInfo = () => {

    const [pageYoffset, setpageYoffset] = React.useState(window.pageYOffset)
    window.addEventListener('scroll', () => setpageYoffset(window.pageYOffset))

    return (
        <FixedTextBox id='DebugInfo'>
            nearestPostIndex: {getNearestPostIndex()}<br />
            isPostCentered: {isPostCentered().toString()}<br />
            pageYoffset: {pageYoffset}
        </FixedTextBox>
    )
}